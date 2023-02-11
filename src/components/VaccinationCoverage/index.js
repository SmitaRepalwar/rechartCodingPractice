import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationDetails} = props
  console.log(vaccinationDetails)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="header-con">
      <ResponsiveContainer
        width="100%"
        height={300}
        className="ResponsiveContainer"
      >
        <BarChart
          data={vaccinationDetails}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="Vaccine_date"
            tick={{
              stroke: '#94a3b8',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: '#94a3b8',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar
            dataKey="dose_1"
            name="Dose 1"
            fill="#5a8dee"
            barSize="20%"
            border-radius={20}
          />
          <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
