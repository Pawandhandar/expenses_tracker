import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

class AuthService {
  async signup(user) {
    return await axios.post(`${API_URL}/signup`, user);
  }

  async login(user) {
    const response = await axios.post(`${API_URL}/login`, user);
    localStorage.setItem('token', response.data.token);
    return response.data;
  }

  async isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) {
      return { isAuthenticated: false, user: null };
    }

    const response = await axios.get(`${API_URL}/isAuthenticated`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}

export default new AuthService();
