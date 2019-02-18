import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { MainPage } from './components/main-page'

const Header = styled.h1`
  color: red;
`

const HelloWorld = () => {
  return (
    <div>
      <Header>Hello there World!</Header>
      <MainPage />
    </div>)
}
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
)

/* 9a3b0f91bf184098baa9d66a8342dac5 */
/* https://newsapi.org/docs/get-started */
