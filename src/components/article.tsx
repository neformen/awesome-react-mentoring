import styled from 'styled-components'
import * as React from 'react'

const defaultImage = require('./../static/default-image.jpg')

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

interface ArticleProps {
  description: string;
  title: string;
  url: string;
  urlToImage: string;
}

export const Article = ({ urlToImage, url, title, description } : ArticleProps) => {
  let articleImageUrl = urlToImage || defaultImage
  return (
    <ArticleWraper href={url}>
      <ArticleImage src={articleImageUrl} alt={title} />
      <ArticleTitle>{title}</ArticleTitle>
      <div>{description}</div>
    </ArticleWraper>
  )
}
