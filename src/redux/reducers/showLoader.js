import { TOGGLE_LOADER } from "../actionTypes";

const initialState = {
    showLoader: false
};

const showLoader = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER: {
      return Object.assign({}, state, {
          showLoader: !state.showLoader
      });
    }
    default: {
      return state;
    }
  }
};

export default showLoader;