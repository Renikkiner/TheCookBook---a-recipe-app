import React, { useMemo, useCallback } from 'react'
import _ from 'lodash'
//context
import { useGlobalContext } from '../../context'
//styles
import { Container, Input, InputArea, Icon } from './SearchBarStyles'

const SearchRecipe = () => {
  const { setQuery, inputText, setInputText, setNumber } = useGlobalContext()

  const debouncedSearch = useMemo(
    () => _.debounce((val) => setQuery(val), 500),
    [setQuery]
  )

  const handleChange = useCallback(
    (e) => {
      setInputText(e.target.value)
      debouncedSearch(e.target.value)
      setNumber(12)
    },
    [debouncedSearch, setNumber, setInputText]
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
