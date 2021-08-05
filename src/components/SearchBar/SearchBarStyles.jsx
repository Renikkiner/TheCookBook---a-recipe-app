import styled from 'styled-components'
import { FaHamburger } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--maxWidth);
  margin: 10rem auto 2rem auto;
`

export const InputArea = styled.div`
  width: var(--extraWidth);
  max-width: var(--maxWidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--size-radius);
  background-color: var(--yellow);
  transition: background-color 0.3s ease;

  &:focus-within {
    background-color: var(--red);
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0px;
    height: 5rem;
    padding: 2rem;
  }
`

export const Input = styled.input`
  width: 100%;
  color: var(--cream);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem;
  border: 0;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`

export const Icon = styled(FaHamburger)`
  color: var(--cream);
  font-size: 2rem;
  margin: 0 1rem;
  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`
