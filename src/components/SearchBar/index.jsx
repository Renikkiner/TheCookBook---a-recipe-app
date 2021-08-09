import React, { useState, useMemo, useCallback } from 'react'
import _ from 'lodash'
//context
import { useGlobalContext } from '../../context'
//styles
import { Container, Input, InputArea, Icon } from './SearchBarStyles'

const SearchRecipe = () => {
  const {
    setQuery,
    inputText,
    setInputText,
    setNumber,
    setFilterName,
    setFilter,
  } = useGlobalContext()

  const debouncedSearch = useMemo(
    () => _.debounce((val) => setQuery(val), 500),
    [setQuery]
  )

  const handleChange = useCallback(
    (e) => {
      setFilterName('')
      setFilter('')
      setInputText(e.target.value)
      debouncedSearch(e.target.value)
      setNumber(12)
    },
    [debouncedSearch, setNumber, setFilter, setFilterName]
  )

  return (
    <Container>
      <InputArea>
        <Icon />
        <Input
          type="text"
          placeholder="Search Recipes.."
          onChange={handleChange}
          value={inputText}
        />
      </InputArea>
    </Container>
  )
}

export default SearchRecipe
