import { useContext } from "react"
import { GamesContext } from "../context/GamesContext"

 const useGames = (id) => {
  return useContext(GamesContext)
}

export default useGames
