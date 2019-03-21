import styled from 'styled-components'

const LoaderWrapper = styled.div`

  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  top: 50%;
  font-size: 100px;
  display: ${({ showLoader }) => showLoader ? 'block' : 'none'};
`

export const Loader = ({ showLoader }) => {
  return (
    <LoaderWrapper showLoader={showLoader}>
        Loading...
    </LoaderWrapper>
  )
}
