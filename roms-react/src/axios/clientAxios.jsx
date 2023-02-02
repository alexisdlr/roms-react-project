import axios from "axios"

const clientAxios = axios.create({
  baseURL: import.meta.env.VITE_APIURL
})


export default clientAxios