import { apiKey } from './../../config'
import { nonEmptyString } from './validations'

const url = 'https://newsapi.org/v2'
const headers = {
  'Accept': 'application/json',
  'Authorization': `Bearer ${apiKey}`
}

const headlinesParams = ['country', 'category', 'sources', 'q', 'pageSize', 'page']
const everythingParams = ['q', 'sources', 'domains', 'excludeDomains', 'to', 'language', 'sortBy', 'pageSize', 'page']
const sourcesParams = ['category', 'language', 'country']

const createQuery = (params, possibleParams) => Object.entries(params)
  .filter((param) => possibleParams.includes(param[0]) && nonEmptyString(param[1]))
  .map(param => `${param[0]}=${param[1]}`)
  .join('&')

const getHeadlines = async (params) => {
  const newsJson = await window.fetch(`${url}/top-headlines?${createQuery(params, headlinesParams)}`, { headers, mode: 'cors' })
  return newsJson.json()
}

const getAllNews = async (params) => {
  const newsJson = await window.fetch(`${url}/everything?${createQuery(params, everythingParams)}`, { headers, mode: 'cors' })
  return newsJson.json()
}

const getSources = async (params) => {
  const sourcesJson = await window.fetch(`${url}/sources?${createQuery(params, sourcesParams)}`, { headers, mode: 'cors' })
  return sourcesJson.json()
}

export {
  getHeadlines,
  getAllNews,
  getSources
}
