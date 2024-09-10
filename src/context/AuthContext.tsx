import React, { createContext, useState } from 'react';
import { UserContextType } from '../types/authType';

// Create the context
export const AuthContext = createContext<UserContextType | undefined>(undefined);

//Provider component
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  const handleUser = (user: any) => {
    setUser(user);
    localStorage.setItem('auth-user',JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth-user');
  };

  return (
    <AuthContext.Provider value={{ user, handleUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};