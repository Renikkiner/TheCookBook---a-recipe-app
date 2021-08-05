import React from 'react'
//components
import SearchBar from '../SearchBar'
import RecipeList from '../RecipeList'
import Spinner from '../Spinner'
//context
import { useGlobalContext } from '../../context'

const Home = () => {
  const { isLoading } = useGlobalContext()

  return (
    <>
      <SearchBar />
      {isLoading ? <Spinner /> : <RecipeList />}
    </>
  )
}

export default Home
