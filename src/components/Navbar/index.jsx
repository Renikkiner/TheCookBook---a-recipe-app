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
    cuisine,
    setCuisine,
    intolerances,
    setIntolerances,
    diet,
    setDiet,
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
    const parent = e.target.parentElement.id.toLowerCase()
    const child = e.target.innerText.toLowerCase()
    //if cuisine
    if (parent === 'cuisine') {
      if (cuisine === child) return
      if (child === 'none') return setCuisine('')
      setCuisine(child)
    }
    //if intolerances
    if (parent === 'intolerances' && intolerances.indexOf(child) === -1) {
      setIntolerances([...intolerances, child])
    } else {
      setIntolerances(intolerances.filter((i) => i !== child))
    }
    //if diet
    if (parent === 'diet') {
      if (diet === child) return
      if (child === 'none') return setDiet('')
      setDiet(child)
    }
  }

  //refresh the site once you click logo
  const handleRefresh = () => {
    setQuery('')
    setCuisine('')
    setIntolerances([])
    setDiet('')
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
              {item.content.map((i) => (
                <CategoryButton
                  key={i}
                  active={
                    intolerances.includes(i.toLowerCase()) ||
                    cuisine === i.toLowerCase() ||
                    diet === i.toLowerCase()
                      ? 'active'
                      : undefined
                  }
                  to="/"
                  onClick={(e) => handleRecipeFilter(e)}>
                  {i}
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
