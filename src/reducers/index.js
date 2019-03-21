import { combineReducers } from 'redux'
import showLoader from './showLoader'
import articles from './articles'

export default combineReducers({ articles, showLoader })
