import styled from 'styled-components'
import { Article } from './article'

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`

export const ArticleList = (props) => {
  let articles = props.articles.map((article, index) => <Article key={index} article={article} />)
  return (
    <ListWrapper>
      { articles }
    </ListWrapper>
  )
}
