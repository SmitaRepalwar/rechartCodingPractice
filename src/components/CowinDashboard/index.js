import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {presentApiStatus: apiStatus.initial, covidData: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({presentApiStatus: apiStatus.inProgress})

    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        presentApiStatus: apiStatus.success,
        covidData: updatedData,
      })
    } else {
      this.setState({presentApiStatus: apiStatus.failure})
    }
  }

  renderOnSuccess = () => {
    const {covidData} = this.state

    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = covidData

    return (
      <>
        <div className="header-con">
          <h1 className="heading">Vaccination Coverage</h1>
          <VaccinationCoverage vaccinationDetails={last7DaysVaccination} />
        </div>
        <div className="header-con">
          <h1 className="heading">Vaccination by gender</h1>
          <VaccinationByGender vaccinationDetails={vaccinationByAge} />
        </div>
        <div className="header-con">
          <h1 className="heading">Vaccination by Age</h1>
          <VaccinationByAge vaccinationDetails={vaccinationByGender} />
        </div>
      </>
    )
  }

  renderOnFailure = () => (
    <div className="header-con">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderOnLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderingComponent = () => {
    const {presentApiStatus} = this.state
    switch (presentApiStatus) {
      case apiStatus.inProgress:
        return this.renderOnLoading()
      case apiStatus.success:
        return this.renderOnSuccess()
      case apiStatus.failure:
        return this.renderOnFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-con">
        <div className="header">
          <div className="logo-con">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <h1 className="logo-name">Co-WIN</h1>
          </div>
          <h1 className="header-para">CoWIN Vaccination in India</h1>
        </div>
        {this.renderingComponent()}
      </div>
    )
  }
}

export default CowinDashboard
