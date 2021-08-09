import { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../data/APIconfig'
const BASE_URL = `${API_URL}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState(null)
  const [number, setNumber] = useState(12)
  const [numberOfResults, setNumberOfResults] = useState(0)
  const [filterName, setFilterName] = useState('')
  const [filter, setFilter] = useState('')

  const fetchRecipes = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.results !== undefined) {
        setNumberOfResults(data.totalResults)
        setData(data.results)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.message })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchMoreRecipes = async (url) => {
    setIsLoadingMore(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.results !== undefined) {
        setNumberOfResults(data.totalResults)
        setData(data.results)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.message })
      }
      setIsLoadingMore(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    //at first it might seem like nothing has changed with filter, but surprisingly it's just many of these recipes are vege, gluten-free etc.
    const url = `${BASE_URL}&query=${urlParams}&number=${number}`
    const filterUrl = `&${filterName}=${filter}`
    if (number > 12) {
      return fetchMoreRecipes(`${url}${filterName && filterUrl}`)
    }

    fetchRecipes(`${url}${filterName && filterUrl}`)
  }, [urlParams, number, filterName, filter])

  return {
    isLoading,
    error,
    data,
    numberOfResults,
    number,
    setNumber,
    setIsLoading,
    isLoadingMore,
    setIsLoadingMore,
    setFilterName,
    setFilter,
  }
}

export default useFetch
