import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Async Thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://invest-iq-backend.vercel.app/api/v1/auth/login",
        // "http://localhost:5000/api/v1/auth/login",
        userData
      );
      const { accessToken, refreshToken, user } = response.data.data.token;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      toast.success("Login Successful!");
      return { user, accessToken, refreshToken };
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async Thunk for user signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://invest-iq-backend.vercel.app/api/v1/auth/register",
        // "http://localhost:5000/api/v1/auth/register",
        userData
      );
      toast.success(
        response.data.message || "Signup Successful! Please verify your email."
      );
      return { email: userData.email, ...response.data };
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Signup failed. Please try again."
      );
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Async Thunk for verifying OTP
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (otpCode, { getState, rejectWithValue }) => {
    try {
      const { userEmail } = getState().auth;
      if (!userEmail) {
        toast.error("No email found for verification");
        throw new Error("Email missing");
      }

      const response = await axios.post(
        "https://invest-iq-backend.vercel.app/api/v1/auth/verifyotp",
        // "http://localhost:5000/api/v1/auth/verifyotp",
        { email: userEmail, code: otpCode }
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "OTP verification failed. Please try again."
      );
      return rejectWithValue(
        error.response?.data ||
          error.message ||
          "OTP verification failed. Please try again."
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    userEmail: null,
    loading: false,
    error: null,
    otpRequested: false,
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.userEmail = null;
      state.otpRequested = false;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      toast.success("Logged out successfully!");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.otpRequested = true;
        state.userEmail = action.meta.arg.email;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.userEmail = null;
        state.otpRequested = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user || action.payload;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;

        if (action.payload?.message) {
          state.error = action.payload.message;
        } else if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "Something went wrong. Please try again.";
        }
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
