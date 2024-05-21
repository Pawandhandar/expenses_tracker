import React, { useEffect, useState, useContext } from 'react';
import ExpenseService from '../../services/ExpenseService';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    ExpenseService.getExpenses(user.token).then((data) => setExpenses(data));
  }, [user.token]);

  const handleDelete = (id) => {
    ExpenseService.deleteExpense(id, user.token).then(() => {
      setExpenses(expenses.filter((expense) => expense.id !== id));
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Amount</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Comments</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{new Date(expense.createdAt).toLocaleString()}</td>
            <td>{new Date(expense.updatedAt).toLocaleString()}</td>
            <td>{expense.comments}</td>
            <td>
              <Link to={`/edit-expense/${expense.id}`}>Edit</Link>
              <button onClick={() => handleDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
