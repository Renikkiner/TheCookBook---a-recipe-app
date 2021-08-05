import React from 'react'
//components
import Spinner from '../Spinner'
//context
import { useGlobalContext } from '../../context'
//styles
import { Container, ButtonContainer } from './ButtonStyles'

const Button = ({ innerText }) => {
  const { isLoadingMore, setIsLoadingMore, recipes, setNumber } =
    useGlobalContext()
  return (
    <Container>
      {recipes.length < 10 ? null : (
        <ButtonContainer
          callback={() => setIsLoadingMore(true)}
          onClick={() =>
            setNumber((oldNumber) => {
              return oldNumber + 12
            })
          }>
          {isLoadingMore ? <Spinner color="cream" /> : innerText}
        </ButtonContainer>
      )}
    </Container>
  )
}

export default Button
