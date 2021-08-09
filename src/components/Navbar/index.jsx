import React, { useState } from 'react'
//data
import { menuData } from '../../data/MenuData'
//context
import { useGlobalContext } from '../../context'
//styles
import {
  Wrapper,
  Nav,
  Container,
  Logo,
  ToggleButton,
  ToggleContainer,
  CategoryContainer,
  CategoryElements,
  CategoryButton,
} from './NavbarStyles'
//icons
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  const {
    setQuery,
    toggleOn,
    setToggleOn,
    setInputText,
    setFilterName,
    setFilter,
  } = useGlobalContext()
  const [isShadow, setIsShadow] = useState(false)

  //navbar shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      setIsShadow(true)
    } else {
      setIsShadow(false)
    }
  })

  //handle recipe filter
  const handleRecipeFilter = (e) => {
    setFilterName(e.target.parentElement.id.toLowerCase())
    setFilter(e.target.innerText.toLowerCase())
  }

  //refresh the site once you click logo
  const handleRefresh = () => {
    setQuery('')
    setFilterName('')
    setFilter('')
    setInputText('')
  }

  return (
    <Wrapper shadow={isShadow}>
      <Nav>
        <Container>
          <Logo to="/" onClick={() => handleRefresh()}>
            TheCookBook
          </Logo>
          <ToggleButton
            isOpen={toggleOn}
            onClick={() => setToggleOn(!toggleOn)}>
            <FaBars />
          </ToggleButton>
        </Container>
      </Nav>
      <ToggleContainer isOpen={toggleOn} shadow={isShadow}>
        <CategoryContainer>
          {menuData.map((item) => (
            <CategoryElements id={item.title} key={item.title}>
              <h1>{item.title}</h1>
              {item.content.map((item) => (
                <CategoryButton
                  key={item.title}
                  to="/"
                  onClick={(e) => handleRecipeFilter(e)}>
                  {item.title}
                </CategoryButton>
              ))}
            </CategoryElements>
          ))}
        </CategoryContainer>
      </ToggleContainer>
    </Wrapper>
  )
}

export default NavBar
