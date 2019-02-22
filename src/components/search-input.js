import { useState } from 'react'
import styled from 'styled-components'

const SearctInputWrapper = styled.input`
    width: 450px;
`

export const SeachInput = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <SearctInputWrapper value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      onBlur={() => props.setSearchQuery(searchQuery)} />
  )
}
