import { ADD_ARTICLES, TOGGLE_LOADER } from "./actionTypes";

export const addArticles = articles => ({
  type: ADD_ARTICLES,
  payload: articles 
});

export const toggleLoader = _ => ({
  type: TOGGLE_LOADER
});
