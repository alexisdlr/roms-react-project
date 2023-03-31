import axios from "axios"

const clientAxios = axios.create({
  baseURL: import.meta.env.VITE_APIURL
})

export const getGamesApi = async (pageNumber) => {
   const {data} = await clientAxios("/games?pageNumber=1")
   return data
}
export const refetchGames = async (pageNumber, pageSize) => {
  if (!pageSize) {pageSize = 10}
  const {data} = await clientAxios(`/games?pageNumber=${pageNumber}&pageSize=${pageSize}`)
  console.log(data)
  return data
}
export default clientAxios