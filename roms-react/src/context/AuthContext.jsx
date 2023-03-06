import { createContext, useState, useEffect } from "react";
import clientAxios from "../axios/clientAxios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("tokenRoms");

      if (!token) {
        setCargando(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await clientAxios("/auth/profile", config);
        setAuth(data);
      } catch (error) {
        setAuth({});
      }

      setCargando(false);
    };
    authUser();
  }, []);

  const logout = async () => {
    try {
      localStorage.removeItem("tokenRoms");
      setAuth({});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, cargando }}>
      {children}
    </AuthContext.Provider>
  );
};
