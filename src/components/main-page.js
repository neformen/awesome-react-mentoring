import { useState } from 'react'
import { SeachBar } from './search-bar'
import { ArticleList } from './article-list'

export const MainPage = () => {
  const [ articles, setArticles ] = useState([])
  const addAtricle = (articles) => {
    setArticles(articles)
  }

  return (
    <div>
      <SeachBar addArticle={addAtricle} />
      <ArticleList articles={articles} />
    </div>
  )
}
