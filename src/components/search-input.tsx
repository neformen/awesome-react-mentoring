import styled from 'styled-components'
import * as React from 'react'

const SearctInputWrapper = styled.input`
    width: 450px;
`

export const SeachInput = (props) => {
  return (
    <SearctInputWrapper
      onChange={(event) => props.setSearchQuery(event.target.value)} />
  )
}
