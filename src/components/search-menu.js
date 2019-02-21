import styled from 'styled-components'
import { CountryDropdown } from './country-dropdown';
import { possibleCountries } from "./../constants";
import { SeachInput } from './search-input';
import { SeachButton } from './search-button';
import { useState } from 'react'
import { getHeadlines } from '../services/news';

const SearchMenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SearchMenu = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchCountry, setSearchCountry] = useState('');
    const getArticles = () => {
        getHeadlines({ q: searchQuery, country: searchCountry }).then((data) => {
            props.addArticle(data.articles)
        })
    }
    return (
        <SearchMenuWrapper>
            <CountryDropdown options={possibleCountries} onCountryChange={setSearchCountry} />
            <SeachInput setSearchQuery={setSearchQuery} />
            <SeachButton onSearchClick={getArticles} />
        </SearchMenuWrapper>
    )
}