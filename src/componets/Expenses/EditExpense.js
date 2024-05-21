import React, { useState, useEffect, useContext } from 'react';
import ExpenseService from '../../services/ExpenseService';
import { AuthContext } from '../../contexts/AuthContext';

const EditExpense = ({ match, history }) => {
  const [expense, setExpense] = useState({ category: '', amount: '', comments: '' });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    ExpenseService.getExpense(match.params.id, user.token).then((data) => setExpense(data));
  }, [match.params.id, user.token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ExpenseService.updateExpense(match.params.id, expense, user.token).then(() => {
      history.push('/expenses');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="category" value={expense.category} onChange={handleChange} placeholder="Category" required />
      <input type="number" name="amount" value={expense.amount} onChange={handleChange} placeholder="Amount" required />
      <input type="text" name="comments" value={expense.comments} onChange={handleChange} placeholder="Comments" />
      <button type="submit">Update Expense</button>
    </form>
  );
};

export default EditExpense;
