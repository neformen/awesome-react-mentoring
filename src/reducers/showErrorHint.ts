import { LOAD_ARTICLES, SHOW_ERROR, ShowErrorHint } from '../actions'

const showErrorHint = (state = false, action: ShowErrorHint) => {
  switch (action.type) {
    case SHOW_ERROR: {
      return true
    }
    case LOAD_ARTICLES: {
      return false
    }
    default: {
      return state
    }
  }
}

export default showErrorHint
