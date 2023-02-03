import { createContext, useState, useEffect } from "react";
import clientAxios from "../axios/clientAxios";

export const ConsolesContext = createContext();

export const ConsolesProvider = ({ children }) => {
    const [consoles, setConsoles] = useState([]);

useEffect(() => {
  const getConsoles = async () => {
    
    try {
      const {data} = await clientAxios('/consoles')
      setConsoles(data);
    } catch (error) {
      console.log(error.response.data.msg)
      setConsoles([])
    }
  }
  getConsoles()
  }, []);



  return (
    <ConsolesContext.Provider value={{ consoles }}>
      {children}
    </ConsolesContext.Provider>
  );
};

export default ConsolesContext