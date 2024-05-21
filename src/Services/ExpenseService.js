import axios from 'axios';

const API_URL = 'http://localhost:8080/api/expenses';

class ExpenseService {
  async addExpense(expense, token) {
    return await axios.post(API_URL, expense, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async getExpenses(token) {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }

  async getExpense(id, token) {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }

  async updateExpense(id, expense, token) {
    return await axios.put(`${API_URL}/${id}`, expense, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async deleteExpense(id, token) {
    return await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new ExpenseService();
