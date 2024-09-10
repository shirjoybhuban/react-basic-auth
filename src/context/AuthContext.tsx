import React, { createContext, useState } from 'react';

interface UserContextType {
  user: any;
  handleUser: (username: any) => void;
}

// Create the context
export const AuthContext = createContext<UserContextType | undefined>(undefined);

//Provider component
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState({ name: "" });

  const handleUser = (user: any) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
};