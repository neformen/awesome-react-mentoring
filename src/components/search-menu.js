import styled from 'styled-components'
import { connect } from "react-redux"
import { addArticles } from "./../redux/actions";
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
  console.log(addArticles(articles))
  return {
    addArticles: articles => dispatch(addArticles(articles))
  };
}

const ConnectedSearchMenu = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchCountry, setSearchCountry] = useState('')
  const getArticles = async (event) => {
    event.preventDefault()
    const data = await getHeadlines({ q: searchQuery, country: searchCountry })
    props.addArticles(data.articles)
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
