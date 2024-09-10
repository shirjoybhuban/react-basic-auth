import React from "react";
import { AuthProvider } from "../../../context/AuthContext";
import LoginForm from "./LoginForm";
import UserCard from "./UserCard";

export const LoginComponent : React.FC= () => {
  return (
    <AuthProvider>
      <div>
        <LoginForm />
      </div>
      <div>
        <UserCard />
      </div>
    </AuthProvider>
  );
};