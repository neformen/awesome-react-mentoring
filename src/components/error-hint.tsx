import styled from 'styled-components'
import * as React from 'react'

const ErrorHintWrapper: any = styled.div`
    font-size: 32px
`

export const ErrorHint = () => {
  return (
    <ErrorHintWrapper>
        Something gets wrong
    </ErrorHintWrapper>
  )
}