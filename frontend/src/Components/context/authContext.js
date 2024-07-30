import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import {jwtDecode} from "jwt-decode";
import { getToken,isTokenValid,getUserFromToken } from "../../utils/utils";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[isAdmin,setIsAdmin] = useState(false);

    useEffect(() => {
      const token = getToken();
      if (token && isTokenValid(token)) {
        const userData = getUserFromToken(token);
        setUser(userData);
        setIsAdmin(userData.isAdmin);
      }
    }, []);
  const logout = ()=> {
    Cookies.remove('token')
    setUser(null);
    setIsAdmin(false)
  }
  return (
    <AuthContext.Provider value={{ user, setUser, isAdmin, setIsAdmin,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
