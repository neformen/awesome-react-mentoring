import styled from 'styled-components'
import { connect } from 'react-redux'
import { Article } from './article'
import { Loader } from './loader'
import * as React from 'react'

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const mapStateToProps = (state: { articles: any; showLoader: boolean; }) => {
  const { articles, showLoader } = state
  return { articles, showLoader }
}

const ConnectedArticleList = ({ articles, showLoader }) => {
  const articleComponets = articles.map((article: JSX.IntrinsicAttributes & { urlToImage: any; url: any; title: any; description: any; }, index: React.ReactText) => <Article key={index} {...article} />)
  return (
    <ListWrapper>
      {articleComponets}
      <Loader showLoader={showLoader} />
    </ListWrapper>
  )
}

export const ArticleList = connect(mapStateToProps)(ConnectedArticleList)
