import { combineEpics, ofType } from 'redux-observable'
import { switchMap, map, catchError } from 'rxjs/operators'

import { getHeadlines } from '../services/news'
import { LOAD_ARTICLES, renderArticles, showErrorHint } from '../actions'
import { of } from 'rxjs';

const searchArticles = (action$) => action$
  .pipe(
    ofType(LOAD_ARTICLES),
    switchMap(({ payload: searchQueryObject }) => getHeadlines(searchQueryObject)),
    map(renderArticles),
    catchError(() => of(showErrorHint(true)))
  )

export const rootEpic = combineEpics(searchArticles)
