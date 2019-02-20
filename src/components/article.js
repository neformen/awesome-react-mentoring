import styled from 'styled-components'

const ArticleWraper = styled.div``

export const Article = (props) => {
  return (
    <ArticleWraper>
      <div>{props.article.author}</div>
      <div>{props.article.title}</div>
      <div>{props.article.description}</div>
    </ArticleWraper>
  )
}
