import styled from 'styled-components'
import { Article } from './article'

const ListWrapper = styled.div``

export const ArticleList = (props) => {
  let articles = props.articles.map(article => <Article article={article} />)
  return (
    <ListWrapper>
      {articles}
    </ListWrapper>
  )
}
