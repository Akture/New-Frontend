import api from '../utils/api';

class FeedbackService {
  async submitFeedback({ feedbackContent, rating }) {
    try {
      const response = await api.post('/feedback/submit', { feedbackContent, rating });
      return response.data;
    } catch (error) {
      throw new Error(this._extractErrorMessage(error));
    }
  }

  _extractErrorMessage(error) {
    return error.response?.data?.message || error.message || 'An unexpected error occurred';
  }
}

const feedbackService = new FeedbackService();
export default feedbackService;
