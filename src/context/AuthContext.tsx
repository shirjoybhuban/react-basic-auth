import React, { createContext, useEffect, useState } from 'react';
import { UserContextType } from '../types/authType';

// Create the context
export const AuthContext = createContext<UserContextType | undefined>(undefined);

//Provider component
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [isHydrate, setIsHydrate] = useState(false);

  useEffect(() => {
    // Hydrate the state from localstorage
    let data : string | null = localStorage.getItem('auth-user');
    if(data && data?.length > 0){
      setUser(JSON.parse(data));
    }
    setIsHydrate(true);
  }, []);
  
  const handleUser = (user: any) => {
    setUser(user);
    localStorage.setItem('auth-user',JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth-user');
  };

  if(!isHydrate){
    return <p>Initializing...</p>
  }

  return (
    <AuthContext.Provider value={{ user, handleUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};