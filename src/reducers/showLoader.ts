import { LOAD_ARTICLES, RENDER_ARTICLES, SHOW_ERROR } from '../actions'

const showLoader = (state = false, action) => {
  console.log(state);
  switch (action.type) {
    case LOAD_ARTICLES: {
      return true
    }
    case RENDER_ARTICLES: {
      return false
    }
    case SHOW_ERROR: {
      return false
    }
    default: {
      return state
    }
  }
}

export default showLoader
