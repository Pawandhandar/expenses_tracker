import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import AddExpense from './components/Expenses/AddExpense';
import ExpenseList from './components/Expenses/ExpenseList';
import EditExpense from './components/Expenses/EditExpense';
import ExpenseChart from './components/Expenses/ExpenseChart';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/add-expense" component={AddExpense} />
        <PrivateRoute path="/expenses" component={ExpenseList} />
        <PrivateRoute path="/edit-expense/:id" component={EditExpense} />
        <PrivateRoute path="/expense-chart" component={ExpenseChart} />
      </Switch>
    </Router>
  );
};

export default App;
