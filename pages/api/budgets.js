import dbConnect from '../../utils/dbConnect';
import Budget from '../../models/Budget';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const budgets = await Budget.find({});
    return res.status(200).json(budgets);
  }

  if (req.method === 'POST') {
    const budget = new Budget(req.body);
    await budget.save();
    return res.status(201).json(budget);
  }
}