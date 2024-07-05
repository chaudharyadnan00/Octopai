import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../pages/Signin";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("email");
  useEffect(() => {
    if (!token) navigate("signin");
  }, [token, navigate]);

  return <div>{children}</div>;
};

export default ProtectedRoute;
