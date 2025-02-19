import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const MonthlyExpensesChart = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="expenses" fill="#8884d8" />
    </BarChart>
  );
};

export default MonthlyExpensesChart;