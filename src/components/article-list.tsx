import styled from 'styled-components'
import { connect } from 'react-redux'
import { Article } from './article'
import { Loader } from './loader'
import * as React from 'react'
import { IState, IArticle } from '../interfaces';
import console = require('console');

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const mapStateToProps = ({ loader, articles }: IState): ArticleListProps => {
  return { articles, loader }
}

interface ArticleListProps {
  articles: IArticle[];
  loader: boolean;
}



const ConnectedArticleList = ({ articles, loader }: ArticleListProps) => {
  const articleComponets = articles.map((article: IArticle, index: number) => <Article key={index} {...article} />)
  return (
    <ListWrapper>
      {articleComponets}
      <Loader loader={loader} />
    </ListWrapper>
  )
}

export const ArticleList = connect(mapStateToProps)(ConnectedArticleList)
