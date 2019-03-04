import styled from 'styled-components'

const LoaderWrapper = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${props => props.showLoader ? 'block' : 'none'};
`

export const Loader = (props) => {
  return (
    <LoaderWrapper showLoader={props.showLoader}>
        Hi All
    </LoaderWrapper>
  )
}