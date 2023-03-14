import { createContext, useState, useEffect } from "react";
import clientAxios from "../axios/clientAxios";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );
  const [games, setGames] = useState([]);
  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await clientAxios("/games");
        setGames(data);
      } catch (error) {
        console.log(error.response.data.msg);
        setConsoles([]);
      }
    };
    getGames();
  }, []);

  const handleAgregarFavorito = (item) => {
    if (favoritos.some((juego) => juego._id === item._id)) {
      return; 
    }
    const nuevosFavoritos = [...favoritos, item];
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };
  function handleQuitarFavorito(juego) {
    const nuevosFavoritos = favoritos.filter((j) => j._id !== juego._id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  }

  return (
    <GamesContext.Provider value={{ games, handleAgregarFavorito, handleQuitarFavorito, favoritos }}>
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContext;
