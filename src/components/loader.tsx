import styled from 'styled-components'
import * as React from 'react'

const LoaderWrapper: any = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  top: 50%;
  font-size: 100px;
  display: ${({ loader }: any) => loader ? 'block' : 'none'};
`

interface ILoaderState {
  loader: boolean;
}

export const Loader = ({ loader }: ILoaderState) => {
  return (
    <LoaderWrapper loader={loader}>
        Loading...
    </LoaderWrapper>
  )
}
