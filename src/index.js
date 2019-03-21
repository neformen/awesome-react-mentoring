import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Provider } from 'react-redux'
import styled from 'styled-components'

import { MainPage } from './components/main-page'
import rootReducer from './reducers'
import { rootEpic } from './epic'

import 'normalize.css'
import './style.css'

const Header = styled.h1`
  color: green;
  text-align: center;
`

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
)

epicMiddleware.run(rootEpic)

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
