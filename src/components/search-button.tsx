import styled from 'styled-components'
import * as React from 'react'

const SeachButtonWrapper = styled.input`
    color: red;
`

export const SeachButton = () => {
  return (
    <SeachButtonWrapper type='submit' value='Search' />
  )
}
