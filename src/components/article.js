import styled from 'styled-components'
import defaultImage from './../static/default-image.jpg'

const ArticleWraper = styled.a`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 10px;
  text-decoration: none;
  color: black;
  :hover {
    color: green;
  }
`

const ArticleImage = styled.img({
  maxWidth: '100%',
  maxHeight: '200px'
})

const ArticleTitle = styled.h3({
  flexGrow: 2,
  marginBottom: '15px'
})

export const Article = (props) => {
  let articleImageUrl = props.article.urlToImage ? props.article.urlToImage : defaultImage
  return (
    <ArticleWraper href={props.article.url}>
      <ArticleImage src={articleImageUrl} alt={props.article.title} />
      <ArticleTitle>{props.article.title}</ArticleTitle>
      <div>{props.article.description}</div>
    </ArticleWraper>
  )
}
