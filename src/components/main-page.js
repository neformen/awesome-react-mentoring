import { useState } from 'react'
import { SeachBar } from './search-bar'

export const MainPage = () => {
  const [ articles, setArticles ] = useState([])
  const addAtricle = (article) => {
    setArticles(articles.concat(article))
  }

  return (
    <div>
      <SeachBar addArticle={addAtricle} />
      <div>{articles}</div>
    </div>
  )
}
