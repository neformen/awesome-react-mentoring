import { ArticleList } from './article-list'
import { SearchMenu } from './search-menu'

export const MainPage = () => {
  return (
    <div>
      <SearchMenu />
      <ArticleList />
    </div>
  )
}
