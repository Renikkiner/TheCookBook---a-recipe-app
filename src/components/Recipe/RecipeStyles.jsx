import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Bottom = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
`

export const Container = styled(Link)`
  width: 20rem;
  height: 25rem;
  color: var(--black);
  background: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto 80%;
  border-radius: var(--size-radius);
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: background-size 0.3s ease;
  box-shadow: var(--shadow), inset 0 0 0 2000px rgba(255, 223, 242, 0.2);

  &:hover {
    background-size: auto 90%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 1.5rem;
    background-size: cover;

    &:hover {
      background-size: cover;
    }
  }
`

export const Info = styled(Bottom)`
  background-color: var(--cream);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: min-height 0.5s ease-in;
  text-align: center;
  h2 {
    margin: 1rem;
    font-size: var(--fontMed);
    text-transform: uppercase;
  }
`

export const WhenReady = styled.div`
  display: flex;
  font-size: var(--fontSmall);
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  color: var(--red);

  hr {
    height: 0.3rem;
    width: 100%;
    background-color: var(--red);
    border: none;
    margin-top: 0.5rem;
    border-radius: var(--size-radius);
  }
`
