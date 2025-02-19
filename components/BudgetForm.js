import { useState } from 'react';

const BudgetForm = ({ onAdd }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const budget = { category, amount: Number(amount), month };
    const res = await fetch('/api/budgets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(budget),
    });
    if (res.ok) {
      onAdd();
      setCategory('');
      setAmount('');
      setMonth('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={category} on Change={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Budget Amount" required />
      <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="Month" required />
      <button type="submit">Set Budget</button>
    </form>
  );
};

export default BudgetForm;