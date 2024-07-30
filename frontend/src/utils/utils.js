import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

export const getToken = () => {
  return Cookies.get("token");
};

export const isTokenValid = (token) => {
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp > Date.now() / 1000;
  } catch (error) {
    return false;
  }
};

export const getUserFromToken = (token) => {
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
};
