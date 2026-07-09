import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';
import { userNeedsDob } from '../utils/userNeedsDob';

export const login = createAsyncThunk(
  'auth/login',
  async ({ usernameOrEmail, password }, { rejectWithValue }) => {
    try {
      const { user } = await authService.login(usernameOrEmail, password);
      return { user };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (idToken, { rejectWithValue }) => {
    try {
      const { user } = await authService.loginWithGoogle(idToken);
      return { user };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { user } = await authService.register(userData);
      return { user };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const { user } = await authService.checkAuth();
      return { user };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      await authService.logout();
    } catch {}
    return {};
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue }) => {
    try {
      const user = await authService.refreshUser();
      return { user };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (userData, { rejectWithValue }) => {
    try {
      const user = await authService.updateProfile(userData);
      return { user };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (newPassword, { rejectWithValue }) => {
    try {
      await authService.changePassword(newPassword);
      return { success: true };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  'auth/deleteAccount',
  async (_, { rejectWithValue }) => {
    try {
      await authService.deleteMyAccount();
      return { success: true };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isInitialized: false,
  pendingGoogleDob: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => { state.error = null; },
    setUser: (state, action) => { state.user = action.payload; },
    clearUser: (state) => { state.user = null; state.pendingGoogleDob = false; },
    setInitialized: (state, action) => { state.isInitialized = action.payload; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.pendingGoogleDob = false;
        state.error = null;
        state.isInitialized = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = null;
        state.isInitialized = true;
      })

      .addCase(loginWithGoogle.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.pendingGoogleDob = userNeedsDob(action.payload.user);
        state.error = null;
        state.isInitialized = true;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = null;
        state.pendingGoogleDob = false;
        state.isInitialized = true;
      })

      .addCase(register.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.error = null;
        state.isInitialized = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = null;
        state.isInitialized = true;
      })

      .addCase(checkAuth.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.error = null;
        state.isInitialized = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isInitialized = true;
      })

      .addCase(logout.pending, (state) => { state.isLoading = true; state.user = null; state.pendingGoogleDob = false; })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.pendingGoogleDob = false;
        state.error = null;
        state.isInitialized = true;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.pendingGoogleDob = false;
        state.isInitialized = true;
      })

      .addCase(refreshUser.fulfilled, (state, action) => { state.user = action.payload.user; })

      .addCase(updateProfile.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        if (!userNeedsDob(action.payload.user)) state.pendingGoogleDob = false;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; })

      .addCase(changePassword.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(changePassword.fulfilled, (state) => { state.isLoading = false; state.error = null; })
      .addCase(changePassword.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; })

      .addCase(deleteAccount.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.error = null;
        state.isInitialized = true;
      })
      .addCase(deleteAccount.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; });
  },
});

export const { clearError, setUser, clearUser, setInitialized } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectIsAuthenticated = (state) => !!state.auth.user;
export const selectIsInitialized = (state) => state.auth.isInitialized;
export const selectPendingGoogleDob = (state) => state.auth.pendingGoogleDob;

export default authSlice.reducer;
