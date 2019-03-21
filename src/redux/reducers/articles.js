import { ADD_ARTICLES } from "../actionTypes";


export default function(state = [], action) {
  switch (action.type) {
    case ADD_ARTICLES: {
      return action.payload
    }
    default:
      return state;
  }
}
