import api from '../utils/api';

class UserService {
  async getMyProfile() {
    try {
      const response = await api.get('/users/me');
      return response.data.data;
    } catch (error) {
      throw new Error(this._extractErrorMessage(error));
    }
  }

  async updateMyProfile(userData) {
    try {
      const response = await api.patch('/users/me', userData);
      return response.data.data;
    } catch (error) {
      throw new Error(this._extractErrorMessage(error));
    }
  }

  async changeMyPassword(newPassword) {
    try {
      await api.post('/users/me/password', { newPassword });
    } catch (error) {
      throw new Error(this._extractErrorMessage(error));
    }
  }

  async deleteMyAccount() {
    try {
      await api.delete('/users/me');
    } catch (error) {
      throw new Error(this._extractErrorMessage(error));
    }
  }

  async searchUser(identifier) {
    try {
      const response = await api.get(`/users/search?identifier=${encodeURIComponent(identifier)}`);
      return response.data.data;
    } catch (error) {
      throw new Error(this._extractErrorMessage(error));
    }
  }

  async getPurchasedVideosByUser(userId) {
    try {
      const response = await api.get(`/users/${userId}/purchased-videos`);
      if (response.data === null) return [];
      return response.data.data || [];
    } catch (error) {
      throw new Error(this._extractErrorMessage(error));
    }
  }

  _extractErrorMessage(error) {
    return error.response?.data?.message || error.message || 'An unexpected error occurred';
  }
}

const userService = new UserService();
export default userService;
