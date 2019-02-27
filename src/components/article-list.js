import styled from 'styled-components'
import { Article } from './article'

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

export const ArticleList = (props) => {
  let articles = props.articles.map((article, index) => <Article key={index} article={article} />)
  return (
    <ListWrapper>
      {articles}
    </ListWrapper>
  )
}
