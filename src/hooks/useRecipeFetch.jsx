import { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../data/APIconfig'

export const useRecipeFetch = (recipeId) => {
  const [state, setState] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchRecipe = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.title !== undefined) {
        setState(data)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.message })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRecipe(`${API_URL}${recipeId}/information?apiKey=${API_KEY}`)
  }, [recipeId])

  return { state, isLoading, error }
}
