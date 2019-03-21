import styled from 'styled-components'
import defaultImage from './../static/default-image.jpg'

const ArticleWraper = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: green;
  }
`

const ArticleImage = styled.img({
  maxWidth: '100%',
  maxHeight: '200px',
  display: 'block',
  margin: 'auto'
})

const ArticleTitle = styled.h3({
  flexGrow: 2,
  marginBottom: '15px'
})

export const Article = ({ article }) => {
  let articleImageUrl = article.urlToImage ? article.urlToImage : defaultImage
  return (
    <ArticleWraper href={article.url}>
      <ArticleImage src={articleImageUrl} alt={article.title} />
      <ArticleTitle>{article.title}</ArticleTitle>
      <div>{article.description}</div>
    </ArticleWraper>
  )
}
