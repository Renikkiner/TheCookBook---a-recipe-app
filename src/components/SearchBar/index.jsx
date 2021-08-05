import React, { useState, useMemo, useCallback } from 'react'
import _ from 'lodash'
//context
import { useGlobalContext } from '../../context'
//styles
import { Container, Input, InputArea, Icon } from './SearchBarStyles'

const SearchRecipe = () => {
  const { setQuery, setNumber, setFilterName, setFilter } = useGlobalContext()
  const [search, setSearch] = useState('')

  const debouncedSearch = useMemo(
    () => _.debounce((val) => setQuery(val), 500),
    [setQuery]
  )

  const handleChange = useCallback(
    (e) => {
      setFilterName('')
      setFilter('')
      setSearch(e.target.value)
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
          value={search}
        />
      </InputArea>
    </Container>
  )
}

export default SearchRecipe
