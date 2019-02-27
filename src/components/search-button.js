import styled from 'styled-components'

const SeachButtonWrapper = styled.input`
    color: red;
`

export const SeachButton = () => {
  return (
    <SeachButtonWrapper type='submit' value='Search' />
  )
}
