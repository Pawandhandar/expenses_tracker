import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <nav>
      <ul>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/add-expense">Add Expense</Link>
            </li>
            <li>
              <Link to="/expenses">View Expenses</Link>
            </li>
            <li>
              <Link to="/expense-chart">Expense Chart</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
