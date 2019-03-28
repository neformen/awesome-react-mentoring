import styled from 'styled-components'
import * as React from 'react'

const SearctInputWrapper = styled.input`
    width: 450px;
`

interface SeachInputProps {
  setSearchQuery: (value: string) => void
}

export const SeachInput = ({setSearchQuery}: SeachInputProps) => {
  return (
    <SearctInputWrapper
      onChange={(event) => setSearchQuery(event.target.value)} />
  )
}
