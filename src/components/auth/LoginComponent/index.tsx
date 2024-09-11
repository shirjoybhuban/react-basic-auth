import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "../../../context/AuthContext";
import LoginForm from "./LoginForm";
import UserCard from "./UserCard";

const LoginComponent : React.FC= () => {
  const auth = useContext(AuthContext);
  
  return (
    <>
      {
        !auth?.user &&  
          <LoginForm />
      }
      {
        auth?.user &&  
          <UserCard />
      }
    </>
  );
};


export default LoginComponent;