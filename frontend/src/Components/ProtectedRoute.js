// frontend/src/components/ProtectedRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";

const ProtectedRoute = ({ children, adminOnly }) => {
  const { user, isAdmin } = useContext(AuthContext);
  if(!user){
    return <Navigate to='/login'/>
  }
  if(adminOnly && !isAdmin){
    return <Navigate to='/shops'/>
  }
  return children;
};

export default ProtectedRoute;
