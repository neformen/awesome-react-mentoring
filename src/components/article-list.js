import styled from 'styled-components'
import { connect } from "react-redux"
import { Article } from './article'
import { Loader } from "./loader";

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  position: relative;
`

const mapStateToProps = state => {
  console.log(state);
  return { articles: state.articles };
};

const ConnectedArticleList = (prop) => {
  console.log(prop)
  let articleComponets = prop.articles.map((article, index) => <Article key={index} article={article} />)
  return (
    <ListWrapper>
      {articleComponets}
      <Loader showLoader={true} />
    </ListWrapper>
  )
}

export const ArticleList = connect(mapStateToProps)(ConnectedArticleList);
