import { IArticle } from "../interfaces";

export const RENDER_ARTICLES = 'RENDER_ARTICLES'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'
export const LOAD_ARTICLES = 'LOAD_ARTICLES'
export const SHOW_ERROR = 'SHOW_ERROR'

export type RenderArticles = { type: string, payload: IArticle[] }
export type LoadArticles = { type: string, payload: Object }
export type ShowErrorHint = { type: string, payload: boolean }

export const renderArticles = (articles: IArticle[]): RenderArticles  => ({
  type: RENDER_ARTICLES,
  payload: articles
})

export const loadArticles = (searchQuery: Object): LoadArticles => ({
  type: LOAD_ARTICLES,
  payload: searchQuery
})

export const showErrorHint = (error: boolean): ShowErrorHint => ({
  type: SHOW_ERROR,
  payload: error
})

