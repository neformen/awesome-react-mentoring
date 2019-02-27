import styled from 'styled-components'
import { CountryDropdown } from './country-dropdown'
import { possibleCountries } from './../constants'
import { SeachInput } from './search-input'
import { SeachButton } from './search-button'
import { useState } from 'react'
import { getHeadlines } from '../services/news'

const SearchMenuWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`

export const SearchMenu = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCountry, setSearchCountry] = useState('')
  const getArticles = async (event) => {
    event.preventDefault();
    const data = await getHeadlines({ q: searchQuery, country: searchCountry });
    props.addArticle(data.articles)
  }
  return (
    <SearchMenuWrapper onSubmit={getArticles}>
      <CountryDropdown options={possibleCountries} onCountryChange={setSearchCountry} />
      <SeachInput setSearchQuery={setSearchQuery} />
      <SeachButton />
    </SearchMenuWrapper>
  )
}
