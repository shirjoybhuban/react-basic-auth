import React, { useContext } from "react"
import { AuthProvider } from "../../context/AuthContext";
import LoginComponent from "./LoginComponent";

export const AuthComponent : React.FC= () => {
  
  return (
    <AuthProvider>
      <LoginComponent/>
    </AuthProvider>
  );
};