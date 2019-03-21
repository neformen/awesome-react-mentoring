import { combineEpics, ofType } from 'redux-observable'
import { switchMap, map, tap } from 'rxjs/operators'

import { getHeadlines } from './../services/news'
import { LOAD_ARTICLES, addArticles, toggleLoader } from './../actions'

const searchArticles = (action$) => action$
  .pipe(
    ofType(LOAD_ARTICLES),
    tap(() => toggleLoader(true)),
    switchMap(({ payload: searchQueryObject }) => getHeadlines(searchQueryObject)),
    map(addArticles),
    tap(() => toggleLoader(false))
  )

export const rootEpic = combineEpics(searchArticles)
