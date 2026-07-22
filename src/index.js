import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/variables.css';
import './styles/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { reduxStore } from './store/reduxStore';
import { injectStore } from './utils/api';
import { logout } from './store/authSlice';

injectStore(reduxStore, logout);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
