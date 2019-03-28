import styled from 'styled-components'
import * as React from 'react'
import { possibleCountries } from '../constants'

const CountryDropdownWrapper = styled.div`
`

interface CountryDropdownProps {
  selected: string;
  onCountryChange: (value: string) => void
}

export const CountryDropdown = ({ selected, onCountryChange }: CountryDropdownProps) => {
  let options = possibleCountries.map((country, index) => (
    <option value={country} key={index}>{country}</option>
  ))
  return (
    <CountryDropdownWrapper>
      <select value={selected} onChange={(event) => onCountryChange(event.target.value)}>
        {options}
      </select>
    </CountryDropdownWrapper>
  )
}
