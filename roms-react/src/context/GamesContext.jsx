import { createContext, useState, useEffect } from "react";
import clientAxios from "../axios/clientAxios";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
    const [games, setGames] = useState([]);

useEffect(() => {
  const getGames = async () => {
    try {
      const {data} = await clientAxios('/games')
      setGames(data);
    } catch (error) {
      console.log(error.response.data.msg)
      setConsoles([])
    }
  }
  getGames()
  }, []);



  return (
    <GamesContext.Provider value={{ games }}>
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContext