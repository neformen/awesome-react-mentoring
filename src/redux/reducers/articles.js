import { ADD_ARTICLES } from "../actionTypes";

const initialState = {
    articles: []
};

export default function(state = initialState, action) {
    console.log(state, action)
  switch (action.type) {
    case ADD_ARTICLES: {
      return Object.assign({}, state, { articles: action.payload });
    }
    default:
      return state;
  }
}
