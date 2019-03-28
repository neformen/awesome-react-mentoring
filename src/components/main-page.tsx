import { ArticleList } from './article-list'
import { SearchMenu } from './search-menu'
import * as React from 'react'

export const MainPage = () => {
  return (
    <div>
      <SearchMenu />
      <ArticleList />
    </div>
  )
}
