import styled from 'styled-components'
import { connect } from 'react-redux'
import { loadArticles } from './../actions'
import { CountryDropdown } from './country-dropdown'
import { possibleCountries } from './../constants'
import { SeachInput } from './search-input'
import { SeachButton } from './search-button'
import { useState } from 'react'

const SearchMenuWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`

function mapDispatchToProps (dispatch) {
  return {
    loadArticles: searchQueryObject => dispatch(loadArticles(searchQueryObject))
  }
}

const ConnectedSearchMenu = ({ loadArticles }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCountry, setSearchCountry] = useState('')
  const getArticles = (event) => {
    event.preventDefault()
    loadArticles({ q: searchQuery, country: searchCountry })
  }
  return (
    <SearchMenuWrapper onSubmit={getArticles}>
      <CountryDropdown options={possibleCountries} onCountryChange={setSearchCountry} />
      <SeachInput setSearchQuery={setSearchQuery} />
      <SeachButton />
    </SearchMenuWrapper>
  )
}

export const SearchMenu = connect(null, mapDispatchToProps)(ConnectedSearchMenu)
