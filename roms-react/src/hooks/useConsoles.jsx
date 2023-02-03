import { useContext } from "react"
import { ConsolesContext } from "../context/ConsolesContext"

const useConsoles = () => {
  return useContext(ConsolesContext)
}

export default useConsoles