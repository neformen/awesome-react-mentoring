import styled from 'styled-components'
import * as React from 'react'

const LoaderWrapper: any = styled.div`

  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  top: 50%;
  font-size: 100px;
  display: ${({ showLoader }: any) => showLoader ? 'block' : 'none'};
`

export const Loader = ({ showLoader }) => {
  return (
    <LoaderWrapper showLoader={showLoader}>
        Loading...
    </LoaderWrapper>
  )
}
