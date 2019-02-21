import styled from 'styled-components'

const SeachButtonWrapper = styled.button`
    color: red;
`

export const SeachButton = (props) => {
    return (
        <SeachButtonWrapper onClick={props.onSearchClick}>Search</SeachButtonWrapper>
    )
}
