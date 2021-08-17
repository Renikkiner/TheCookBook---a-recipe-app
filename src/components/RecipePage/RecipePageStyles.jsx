import styled from 'styled-components'
import { Link } from 'react-router-dom'
//icons
import { GiCampCookingPot } from 'react-icons/gi'

export const Container = styled.div`
  border-radius: var(--size-radius);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 5rem auto 0 auto;
  width: 100%;
  max-width: var(--maxWidth);
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 20rem;
  background: ${(props) => `-webkit-linear-gradient(
      rgba(242, 204, 143, 0.5),
      rgba(255, 255, 255, 1)
    ),
    url(${props.background})`};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;

  h1 {
    color: var(--red);
    font-size: var(--fontSuperBig);
    font-weight: 400;
  }

  h3 {
    color: var(--green);
    font-size: var(--fontMed);
    font-weight: 400;
    margin-bottom: 1rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 8rem 1rem;

  @media only screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ServingsContainer = styled.div`
  width: 30%;
  h1 {
    font-size: var(--fontBig);
    color: var(--green);
  }

  h3 {
    font-weight: 400;
    font-size: var(--fontMed);
    margin: 0.5rem 0;
  }

  @media only screen and (max-width: 970px) {
    width: 100%;
    text-align: center;
  }
`

export const PreparationContainer = styled.div`
  width: 60%;
  font-family: var(--oswald);
  text-align: center;

  h1 {
    font-size: var(--fontBig);
    color: var(--red);
  }

  li {
    font-weight: 400;
    font-size: var(--fontMed);
    margin: 0.5rem 0;
  }

  @media only screen and (max-width: 970px) {
    width: 100%;
    padding: 1rem;
  }
`

export const Icon = styled(GiCampCookingPot)`
  color: var(--red);
  font-size: 4rem;
`

export const Button = styled(Link)`
  margin: 0 auto;
`
