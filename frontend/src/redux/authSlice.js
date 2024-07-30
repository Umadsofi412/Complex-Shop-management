// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

const token = Cookies.get("token");
let initialUser = null;
let initialIsAdmin = false;

if (token) {
  try {
    const decoded = jwtDecode(token);
    initialUser = decoded;
    initialIsAdmin = decoded.isAdmin; // assuming the token has an `isAdmin` field
  } catch (error) {
    console.error("Failed to decode token:", error);
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialUser,
    isAdmin: initialIsAdmin,
  },
  reducers: {
    setAuthToken: (state, action) => {
      const token = action.payload;
      Cookies.set("token", token);
      const decoded = jwtDecode(token);
      state.user = decoded;
      state.isAdmin = decoded.isAdmin;
    },
    clearAuthToken: (state) => {
      Cookies.remove("token");
      state.user = null;
      state.isAdmin = false;
    },
  },
});

export const { setAuthToken, clearAuthToken } = authSlice.actions;

export default authSlice.reducer;
