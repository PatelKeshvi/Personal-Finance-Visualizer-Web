import dbConnect from '../../utils/dbConnect';
import Transaction from '../../models/Transaction';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const transactions = await Transaction.find({});
    return res.status(200).json(transactions);
  }

  if (req.method === 'POST') {
    const transaction = new Transaction(req.body);
    await transaction.save();
    return res.status(201).json(transaction);
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;
    await Transaction.findByIdAndDelete(id);
    return res.status(204).end();
  }
}