import axios from 'axios';
import { toast } from 'react-toastify';
import auth from './auth';

let _store;
let _logout;

export const injectStore = (store, logoutAction) => {
  _store = store;
  _logout = logoutAction;
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/v1',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = auth.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isLoggingOut = false;

const isPublicAuthRequest = (url = '') =>
  ['/auth/login', '/auth/google', '/auth/forgot', '/auth/reset', '/users/register'].some(
    (path) => url.includes(path)
  );

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      if (!isLoggingOut) toast.error('Network Error. Please try again later.');
      return Promise.reject(error);
    }

    const { status } = error.response;
    const { message } = error.response.data || {};
    const skipGlobalAuthHandling = isPublicAuthRequest(error.config?.url);

    switch (status) {
      case 400:
        if (!isLoggingOut && !skipGlobalAuthHandling) toast.error(message || 'Bad Request');
        break;
      case 401:
        if (!isLoggingOut && !skipGlobalAuthHandling) {
          toast.error(message || 'Unauthorized, please log in');
          isLoggingOut = true;
          _store?.dispatch(_logout());
        }
        break;
      case 403:
        if (!isLoggingOut && !skipGlobalAuthHandling) {
          toast.error("You don't have permission to access this resource");
          isLoggingOut = true;
          _store?.dispatch(_logout());
        }
        break;
      case 404:
        if (!isLoggingOut && !error.config?.url?.includes('/subscriptions/'))
          toast.error(message || 'Resource not found');
        break;
      case 422:
        if (!isLoggingOut) toast.error(message || 'Validation Error');
        break;
      case 409:
        if (!isLoggingOut) toast.error(message || 'Duplicate request, please check your email');
        break;
      default:
        if (!isLoggingOut) toast.error(message || 'An error occurred. Please try again.');
        break;
    }
    return Promise.reject(error);
  }
);

export const resetLogoutFlag = () => { isLoggingOut = false; };

export default api;
