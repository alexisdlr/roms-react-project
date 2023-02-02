import { useEffect, useState } from "react"

export const useConsoles = () => {
  const [consoles, setConsoles] = useState([])
  const url = 'http://localhost:8800/api/consoles'

  const getConsoles = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setConsoles(data))
  }

  useEffect(() => {
    getConsoles()
  }, [])

  return {consoles}
}