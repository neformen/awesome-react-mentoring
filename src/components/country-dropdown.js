import styled from 'styled-components'

const CountryDropdownWrapper = styled.div`
`

export const CountryDropdown = (props) => {
    let options = props.options.map((option, index) => (
        <option value={option} key={index}>{option}</option>
    ))
  return (
    <CountryDropdownWrapper>
        <select value={props.selected} onChange={(event) =>props.onCountryChange(event.target.value)}>
            {options}
        </select>
    </CountryDropdownWrapper>
  )
}


//props.onCountryChange