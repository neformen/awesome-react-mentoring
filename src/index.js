import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { MainPage } from './components/main-page'

import { Provider } from 'react-redux'
import store from './redux/store'

import 'normalize.css'

const Header = styled.h1`
  color: green;
  text-align: center;
`

const App = () => {
  return (
    <div>
      <Header>Your personal news keeper</Header>
      <MainPage />
    </div>)
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/* https://newsapi.org/docs/get-started */
