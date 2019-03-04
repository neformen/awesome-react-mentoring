import { useState } from 'react'
import { ArticleList } from './article-list'
import { SearchMenu } from './search-menu'

export const MainPage = () => {
  const [ articles, setArticles ] = useState([])
  const addArticle = (articles) => {
    setArticles(articles)
  }

  return (
    <div>
      <SearchMenu />
      <ArticleList />
    </div>
  )
}
