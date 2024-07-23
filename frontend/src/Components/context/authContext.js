import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[isAdmin,setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token)
          setIsAdmin(decoded.isAdmin)
          const response = await axios.get(
            "http://localhost:5000/api/auth/me",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setUser(response.data);
          
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };
    fetchUser();
  }, []);
  const logout = ()=> {
    localStorage.removeItem('token')
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
