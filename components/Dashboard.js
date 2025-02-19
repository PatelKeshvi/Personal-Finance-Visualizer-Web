import CategoryPieChart from './CategoryPieChart';

const Dashboard = ({ transactions }) => {
  const categoryData = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  const pieData = Object.entries(categoryData).map(([name, value]) => ({ name, value }));

  return (
    <div>
      <h2>Dashboard</h2>
      <CategoryPieChart data={pieData} />
    </div>
  );
};

export default Dashboard;