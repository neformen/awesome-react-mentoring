export const ADD_ARTICLES = 'ADD_ARTICLES'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'
export const LOAD_ARTICLES = 'LOAD_ARTICLES'

export const addArticles = articles => ({
  type: ADD_ARTICLES,
  payload: articles
})

export const toggleLoader = showLoader => ({
  type: TOGGLE_LOADER,
  payload: showLoader
})

export const loadArticles = searchQueryObject => ({
  type: LOAD_ARTICLES,
  payload: searchQueryObject
})
