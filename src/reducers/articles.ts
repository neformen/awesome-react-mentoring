import { RENDER_ARTICLES, RenderArticles } from '../actions'
import { IArticle } from '../interfaces';

export default function (state: IArticle[] = [], action: RenderArticles) {
  switch (action.type) {
    case RENDER_ARTICLES: {
      return action.payload
    }
    default:
      return state
  }
}
