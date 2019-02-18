import { useState } from 'react'
import { SeachBar } from './search-bar'

export const MainPage = () => {
  const [ articles, setArticles ] = useState([])
  const addAtricle = (article) => {
    // console.log(articles);
    setArticles(articles.concat[article])
  }

  console.log(articles)

  return (
    <div>
      <SeachBar addArticle={addAtricle} />
      <div>{articles}</div>
    </div>
  )
}
