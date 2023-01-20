import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
   const initialState = JSON.parse(localStorage.getItem("user"))
  const [currentUser, setCurrentUser] = useState(
    initialState || null
  );

const logout = async () => {
  try {
    setCurrentUser(null)
    const res = await axios.post("http://localhost:8800/api/auth/logout"); 
    console.log(res)
  } catch (error) {
    console.log(error);
  }
}

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", inputs); 
      setCurrentUser(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};