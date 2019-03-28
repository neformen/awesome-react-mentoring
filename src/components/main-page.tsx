import { ArticleList } from './article-list'
import { SearchMenu } from './search-menu'
import * as React from 'react'
import { connect } from 'react-redux'
import { ErrorHint } from './error-hint';
import { IState } from '../interfaces';

const mapStateToProps = ({error}: IState): MainPageProps => {
  return { error }
}

interface MainPageProps {
  error: boolean;
}

const ConnectedMainPage = ({error}: MainPageProps) => {
  const content = error ? <ErrorHint /> : <ArticleList />
  return (
    <div>
      <SearchMenu />
      { content }
    </div>
  )
}

export const MainPage = connect(mapStateToProps)(ConnectedMainPage)
