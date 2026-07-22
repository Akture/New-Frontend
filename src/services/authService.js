import api from '../utils/api';
import auth from '../utils/auth';

class AuthService {
  async login(usernameOrEmail, password) {
    const response = await api.post('/auth/login', { usernameOrEmail, password });
    const { user, token } = response.data.data || response.data;
    auth.setToken(token);
    auth.setUser(user);
    return { user };
  }

  async loginWithGoogle(idToken) {
    const response = await api.post('/auth/google', { idToken });
    const { user, token } = response.data.data || response.data;
    auth.setToken(token);
    auth.setUser(user);
    return { user };
  }

  async register(userData) {
    const response = await api.post('/users/register', userData);
    const { user, token } = response.data.data || response.data;
    auth.setToken(token);
    auth.setUser(user);
    return { user };
  }

  async checkAuth() {
    const response = await api.get('/users/me');
    const user = response.data.data || response.data;
    auth.setUser(user);
    return { user };
  }

  async logout() {
    try {
      await api.post('/auth/logout');
    } finally {
      auth.clearAuth();
    }
  }

  async refreshUser() {
    const response = await api.get('/users/me');
    const user = response.data.data || response.data;
    auth.setUser(user);
    return user;
  }

  async updateProfile(userData) {
    const response = await api.patch('/users/me', userData);
    const user = response.data.data || response.data;
    auth.setUser(user);
    return user;
  }

  async changePassword(newPassword) {
    await api.post('/users/me/password', { newPassword });
  }

  async deleteMyAccount() {
    await api.delete('/users/me');
    auth.clearAuth();
  }

  async searchUser(identifier) {
    const response = await api.get(`/users/search?identifier=${encodeURIComponent(identifier)}`);
    return response.data.data || response.data;
  }
}

const authService = new AuthService();
export default authService;
