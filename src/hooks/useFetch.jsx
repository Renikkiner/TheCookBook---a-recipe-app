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
  const [cuisine, setCuisine] = useState('')
  const [intolerances, setIntolerances] = useState([])
  const [diet, setDiet] = useState('')

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
    const intolerancesURL = `&intolerances=${intolerances.join(',')}`
    const dietURL = `&diet=${diet}`
    const cuisineURL = `&cuisine=${cuisine}`
    const url = `${BASE_URL}&query=${urlParams}&number=${number}${
      intolerances && intolerancesURL
    }${diet && dietURL}${cuisine && cuisineURL}`
    if (number > 12) {
      return fetchMoreRecipes(`${url}`)
    }
    fetchRecipes(`${url}`)
  }, [urlParams, number, intolerances, cuisine, diet])

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
    cuisine,
    setCuisine,
    intolerances,
    setIntolerances,
    diet,
    setDiet,
  }
}

export default useFetch
