import { TOGGLE_LOADER } from '../actions'

const showLoader = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_LOADER: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default showLoader
