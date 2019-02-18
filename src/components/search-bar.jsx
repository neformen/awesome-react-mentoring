import { Component } from 'react'
import styled from 'styled-components'

const SearctInput = styled.input`
    width: 450px;
`
const SearchWrapper = styled.div`
    dislay: flex;
`

export class SeachBar extends Component {
  onInputChange (article) {
    this.props.addArticle(article)
  }
  render () {
    return <SearchWrapper>
      <SearctInput onChange={(event) => this.onInputChange(event.target.value)} />
    </SearchWrapper>
  }
}
