import styled from 'styled-components'
import { connect } from "react-redux"
import { addArticles, toggleLoader } from "./../redux/actions";
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

function mapDispatchToProps(dispatch) {
  return {
    addArticles: articles => dispatch(addArticles(articles)),
    toggleLoader: showLoader => dispatch(toggleLoader(showLoader))
  };
}

const ConnectedSearchMenu = ({addArticles, toggleLoader}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCountry, setSearchCountry] = useState('')
  const getArticles = async (event) => {
    event.preventDefault()
    toggleLoader(true)
    const data = await getHeadlines({ q: searchQuery, country: searchCountry })
    addArticles(data.articles)
    toggleLoader(false)
  }
  return (
    <SearchMenuWrapper onSubmit={getArticles}>
      <CountryDropdown options={possibleCountries} onCountryChange={setSearchCountry} />
      <SeachInput setSearchQuery={setSearchQuery} />
      <SeachButton />
    </SearchMenuWrapper>
  )
}

export const SearchMenu = connect(null, mapDispatchToProps)(ConnectedSearchMenu);
