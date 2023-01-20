import { useEffect, useState } from "react"

export const useGames = () => {
  const [games, setGames] = useState([])
  const url = 'http://localhost:8800/api/games'

  const getGames = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setGames(data))
  }

  useEffect(() => {
    getGames()
  }, [])

  return {games}
}