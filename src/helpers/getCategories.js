import { useState, useEffect } from "react"
import { getCategories } from "../services/http"


export default function useGetCategories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function getList() {
      let response = await getCategories()
      setCategories(response.data)
    }
    getList()
  }, [])
  return categories
}
