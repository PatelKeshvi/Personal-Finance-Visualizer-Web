import BudgetForm from '../components/BudgetForm';
import BudgetComparisonChart from '../components/BudgetComparisonChart';

const Home = () => {
  const [budgets, setBudgets] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const fetchBudgets = async () => {
    const res = await fetch('/api/budgets');
    const data = await res.json();
    setBudgets(data);
  };

  const handleAddBudget = () => {
    fetchBudgets();
  };

  useEffect(() => {
    fetchTransactions();
    fetchBudgets();
  }, []);

  return (
    <div>
      <h1>Personal Finance Visualizer</h1>
      <TransactionForm onAdd={handleAddTransaction} />
      <TransactionList onDelete={handleDeleteTransaction} />
      <MonthlyExpensesChart data={chartData} />
      <BudgetForm onAdd={handleAddBudget} />
      <BudgetComparisonChart budgetData={budgets} actualData={transactions} />
    </div>
  );
};

export default Home;