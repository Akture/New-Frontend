const USER_KEY = 'user';
const TOKEN_KEY = 'token';
const SESSION_EXPIRY_KEY = 'session_expiry';
const SESSION_DURATION_DAYS = 7;

const calculateSessionExpiry = () => {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + SESSION_DURATION_DAYS);
  return expiryDate.getTime();
};

const isSessionExpired = () => {
  try {
    const expiryTimestamp = localStorage.getItem(SESSION_EXPIRY_KEY);
    if (!expiryTimestamp) return true;
    return new Date().getTime() > parseInt(expiryTimestamp);
  } catch {
    return true;
  }
};

const removeUser = () => {
  try {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(SESSION_EXPIRY_KEY);
  } catch {}
};

const setToken = (token) => {
  try {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  } catch {}
};

const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
};

const setUser = (user) => {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(SESSION_EXPIRY_KEY, calculateSessionExpiry().toString());
  } catch {}
};

const getUser = () => {
  try {
    if (isSessionExpired()) {
      removeUser();
      return null;
    }
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch {
    return null;
  }
};

const getSessionExpiry = () => {
  try {
    const ts = localStorage.getItem(SESSION_EXPIRY_KEY);
    return ts ? new Date(parseInt(ts)) : null;
  } catch {
    return null;
  }
};

const getRemainingSessionTime = () => {
  try {
    const ts = localStorage.getItem(SESSION_EXPIRY_KEY);
    if (!ts) return 0;
    return Math.max(0, parseInt(ts) - new Date().getTime());
  } catch {
    return 0;
  }
};

const extendSession = () => {
  try {
    const user = getUser();
    if (user) { setUser(user); return true; }
    return false;
  } catch {
    return false;
  }
};

const auth = {
  setUser,
  getUser,
  setToken,
  getToken,
  removeUser,
  clearAuth: removeUser,
  getSessionExpiry,
  getRemainingSessionTime,
  extendSession,
  isSessionExpired,
  SESSION_DURATION_DAYS,
};

export default auth;
