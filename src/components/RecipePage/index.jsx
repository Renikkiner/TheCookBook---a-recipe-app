import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
//components
import Spinner from '../Spinner'
//hook
import { useRecipeFetch } from '../../hooks/useRecipeFetch'
//styles
import { ButtonContainer } from '../Button/ButtonStyles'
import {
  Icon,
  Button,
  Container,
  ImageContainer,
  ContentContainer,
  ServingsContainer,
  PreparationContainer,
} from './RecipePageStyles'

const RecipePage = () => {
  const { recipeId } = useParams()
  const { isLoading, state, error } = useRecipeFetch(recipeId)
  const {
    creditsText: credits,
    image,
    servings,
    title,
    extendedIngredients: ingredients,
    analyzedInstructions,
  } = state

  //API might not give analyzedInstructions, or give no instructions at all
  //also, since Foodista can be edited by everyone, some analyzedInstructions are inconsistent. For example, Veggie Lasagna Rolls steps are written all in uppercase inside a single step
  const [preparationSteps, setPreparationSteps] = useState()
  useEffect(() => {
    if (analyzedInstructions !== undefined && analyzedInstructions.length === 1)
      setPreparationSteps(analyzedInstructions[0].steps)
    if (analyzedInstructions !== undefined && analyzedInstructions.length > 1) {
      const newInst = _.flatten(_.map(analyzedInstructions, 'steps'))
      setPreparationSteps(newInst)
    }
  }, [state, analyzedInstructions])

  if (isLoading) return <Spinner />
  //once you run out of API points, the message will show
  if (!title) return <h1>{error.msg}</h1>
  return (
    <Container>
      <ImageContainer background={image}>
        <h1>{title}</h1>
        <h3>By {credits}</h3>
      </ImageContainer>
      <ContentContainer>
        <ServingsContainer>
          <h1>Ingredients for {servings} servings</h1>
          {ingredients.map((item, index) => {
            return <h3 key={index}>{item.original}</h3>
          })}
        </ServingsContainer>
        <PreparationContainer>
          <Icon />
          {preparationSteps ? (
            <>
              <h1>Preparation</h1>
              <ol>
                {preparationSteps.map((item, index) => {
                  return <li key={index}>{item.step}</li>
                })}
              </ol>
            </>
          ) : (
            <h1>Whoops, there are no steps available</h1>
          )}
        </PreparationContainer>
      </ContentContainer>
      <Button to="/">
        <ButtonContainer>Go back</ButtonContainer>
      </Button>
    </Container>
  )
}

export default RecipePage
