import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationDetails} = props

  return (
    <PieChart width={1000} height={300} align="center">
      <Pie
        cx="70%"
        cy="70%"
        data={vaccinationDetails}
        startAngle={360}
        endAngle={0}
        innerRadius="0%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="18-44" fill=" #2d87bb" />
        <Cell name="45-60" fill="#a3df9f" />
        <Cell name="Above 60" fill="#64c2a6" />
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

export default VaccinationByAge
