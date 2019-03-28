import { combineReducers } from 'redux'
import loader from './showLoader'
import articles from './articles'

export default combineReducers({ articles, loader })
