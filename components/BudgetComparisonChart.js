import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const BudgetComparisonChart = ({ budgetData, actualData }) => {
  const combinedData = budgetData.map((budget) => {
    const actual = actualData.find((a) => a.category === budget.category) || { amount: 0 };
    return {
      category: budget.category,
      budget: budget.amount,
      actual: actual.amount,
    };
  });

  return (
    <BarChart width={600} height={300} data={combinedData}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="budget" fill="#82ca9d" />
      <Bar dataKey="actual" fill="#8884d8" />
    </BarChart>
  );
};

export default BudgetComparisonChart;