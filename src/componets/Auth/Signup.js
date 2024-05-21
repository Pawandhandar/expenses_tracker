import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const Signup = ({ history }) => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.signup(user).then(() => {
      history.push('/login');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
