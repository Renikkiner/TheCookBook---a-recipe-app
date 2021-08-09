import React from 'react'
//components
import Button from '../Button'
import Recipe from '../Recipe'
//styles
import { Container, Message } from './RecipeListStyles'
//context
import { useGlobalContext } from '../../context'

const RecipeList = () => {
  const { recipes, isLoading, error, numberOfResults, number } =
    useGlobalContext()
  return (
    <>
      <Container>
        {recipes && recipes.length === 0 && (
          <Message>Sorry, no matches found..</Message>
        )}
        {recipes ? (
          recipes.map((item) => <Recipe key={item.id} {...item} />)
        ) : (
          <Message>{error.msg}</Message>
        )}
      </Container>
      {!isLoading && numberOfResults > number ? (
        <Button innerText="Load More.." />
      ) : null}
    </>
  )
}

export default RecipeList
