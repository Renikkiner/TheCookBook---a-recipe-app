import React, { useState, useContext } from 'react'
//hook
import useFetch from './hooks/useFetch'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('')
  const [inputText, setInputText] = useState('')
  const [toggleOn, setToggleOn] = useState(false)
  const {
    isLoading,
    setIsLoading,
    isLoadingMore,
    setIsLoadingMore,
    error,
    number,
    setNumber,
    data: recipes,
    numberOfResults,
    setFilterName,
    setFilter,
  } = useFetch(query)

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isLoadingMore,
        setIsLoadingMore,
        number,
        setNumber,
        error,
        recipes,
        query,
        setQuery,
        inputText,
        setInputText,
        numberOfResults,
        toggleOn,
        setToggleOn,
        setFilterName,
        setFilter,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
