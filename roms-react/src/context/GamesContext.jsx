import { createContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getGamesApi, refetchGames } from "../axios/clientAxios";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams();

  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  const { data } = useQuery("games", getGamesApi);

  const mutation = useMutation(refetchGames, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('games')
    },
  })

  const games = data?.games
  const pageSize = data?.pageSize
  const pageNumber = data?.pageNumber
  const totalRows = data?.totalRows

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
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  }

  return (
    <GamesContext.Provider
      value={{
        games,
        totalRows,
        pageNumber,
        pageSize,
        mutation,
        handleAgregarFavorito,
        handleQuitarFavorito,
        favoritos,
        setSearchParams,
        searchParams,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContext;
