import React from 'react'
//styles
import { Container, Info, WhenReady } from './RecipeStyles'
//helper
import { calcTime } from '../../helpers'

const Recipe = ({ title, image, id: recipeId, readyInMinutes }) => {
  return (
    <Container background={image} to={`/recipe/${recipeId}`}>
      <Info>
        <WhenReady>
          Ready in {calcTime(readyInMinutes)}
          <hr />
        </WhenReady>
        <h2>{title}</h2>
      </Info>
    </Container>
  )
}

export default Recipe
