import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationDetails} = props

  return (
    <PieChart width={1000} height={300} align="center">
      <Pie
        cx="70%"
        cy="70%"
        data={vaccinationDetails}
        startAngle={0}
        endAngle={180}
        innerRadius="40%"
        outerRadius="70%"
        dataKey="count"
        className="pie-chart"
      >
        <Cell name="Male" fill="#f54394" />
        <Cell name="Female" fill="#5a8dee" />
        <Cell name="Gender" fill="#2cc6c6" />
      </Pie>
      <Legend
        iconType="circle"
        layout="horizontal"
        horizontalAlign="center"
        align="center"
      />
    </PieChart>
  )
}

export default VaccinationByGender
