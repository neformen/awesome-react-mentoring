import { Component } from 'react'
import styled from 'styled-components'
import { getHeadlines } from './../services/news'

const SearctInput = styled.input`
    width: 450px;
`
const SearchWrapper = styled.div`
    dislay: flex;
`

const SeachButton = styled.button`
    color: red;
`

export class SeachBar extends Component {
  constructor () {
    super()
    this.state = {
      searchWord: ''
    }
  }
  onInputChange (searchWord) {
    this.setState({ searchWord })
  }
  onSearch () {
    getHeadlines({ q: this.state.searchWord }).then((data) => {
      console.log(data)
    })
  }
  render () {
    return <SearchWrapper>
      <SearctInput value={this.state.searchWord} onChange={(event) => this.onInputChange(event.target.value)} />
      <SeachButton onClick={() => this.onSearch()}> Search </SeachButton>
    </SearchWrapper>
  }
}
