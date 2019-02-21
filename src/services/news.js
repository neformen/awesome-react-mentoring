import { apiKey } from './../../config'
import { nonEmptyString } from './validations'

const url = 'https://newsapi.org/v2'
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
}

const headlinesParams = ['country', 'category', 'sources', 'q', 'pageSize', 'page']
const everythingParams = ['q', 'sources', 'domains', 'excludeDomains', 'to', 'language', 'sortBy', 'pageSize', 'page']
const sourcesParams = ['category', 'language', 'country']

const parseResponse = (response) => response.json()
const createQuery = (params, possibleParams) => Object.entries(params)
  .filter((param) => possibleParams.includes(param[0]) && nonEmptyString(param[1]))
  .map(param => `${param[0]}=${param[1]}`)
  .join('&')

function getHeadlines (params) {
  return window.fetch(`${url}/top-headlines?${createQuery(params, headlinesParams)}`, { headers }).then(parseResponse)
}

function getAllNews (params) {
  return window.fetch(`${url}/everything?${createQuery(params, everythingParams)}`, { headers }).then(parseResponse)
}

function getSources (params) {
  return window.fetch(`${url}/sources?${createQuery(params, sourcesParams)}`, { headers }).then(parseResponse)
}

export {
  getHeadlines,
  getAllNews,
  getSources
}
