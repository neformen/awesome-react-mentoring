import styled from 'styled-components'
import { connect } from 'react-redux'
import { loadArticles } from '../actions'
import { CountryDropdown } from './country-dropdown'
import { SeachInput } from './search-input'
import { SeachButton } from './search-button'
import { useState } from 'react'
import * as React from 'react'

const SearchMenuWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`

function mapDispatchToProps(dispatch): SearchMenuProps {
  return {
    loadArticles: (searchQuery: Object) => dispatch(loadArticles(searchQuery))
  }
}

interface SearchMenuProps {
  loadArticles: (value: Object) => void
}

const ConnectedSearchMenu = ({ loadArticles }: SearchMenuProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCountry, setSearchCountry] = useState('')
  const getArticles = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    loadArticles({ q: searchQuery, country: searchCountry })
  }
  return (
    <SearchMenuWrapper onSubmit={getArticles}>
      <CountryDropdown selected={searchCountry} onCountryChange={setSearchCountry} />
      <SeachInput setSearchQuery={setSearchQuery} />
      <SeachButton />
    </SearchMenuWrapper>
  )
}

export const SearchMenu = connect(null, mapDispatchToProps)(ConnectedSearchMenu)
