import styled from 'styled-components'
import { connect } from 'react-redux'
import { Article } from './article'
import { Loader } from './loader'

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const mapStateToProps = state => {
  const { articles, showLoader } = state
  return { articles, showLoader }
}

const ConnectedArticleList = ({ articles, showLoader }) => {
  const articleComponets = articles.map((article, index) => <Article key={index} {...article} />)
  return (
    <ListWrapper>
      {articleComponets}
      <Loader showLoader={showLoader} />
    </ListWrapper>
  )
}

export const ArticleList = connect(mapStateToProps)(ConnectedArticleList)
