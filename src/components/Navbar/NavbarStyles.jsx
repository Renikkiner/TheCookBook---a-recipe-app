import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
`

export const Nav = styled.div`
  width: 100%;
  background-color: var(--white);
`

export const Container = styled.div`
  max-width: var(--maxWidth);
  background-color: var(--white);
  height: 5rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(Link)`
  font-family: var(--oswald);
  font-size: var(--fontSuperBig);
  color: var(--red);
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`

export const ToggleButton = styled.button`
  color: var(--green);
  border: none;
  font-size: var(--fontSuperBig);
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.5s ease;
`

export const ToggleContainer = styled.div`
  position: fixed;
  background-color: rgba(224, 122, 95, 0.98);
  width: 100%;
  padding: 2rem 0;
  height: auto;
  z-index: -1;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform, background-color, 0.5s ease;
  box-shadow: ${({ shadow }) => (shadow ? 'var(--shadow)' : 'none')};

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

export const CategoryContainer = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const CategoryElements = styled.div`
  text-align: center;

  h1 {
    color: var(--white);
    font-size: var(--fontBig);
  }

  @media only screen and (max-width: 767px) {
    margin-top: 1rem;
    font-size: var(--fontMed);
    h1 {
      font-size: var(--fontBig);
    }
  }
`

export const CategoryButton = styled(Link)`
  color: var(--yellow);
  font-size: var(--fontMed);
  font-family: var(--oswald);
  font-weight: 700;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--cream);
  }
`

export const Icon = styled.div`
  padding-top: 0.5rem;
  margin-right: 0.2rem;
`
