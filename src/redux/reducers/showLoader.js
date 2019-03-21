import { TOGGLE_LOADER } from "../actionTypes";


const showLoader = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_LOADER: {
      return action.payload
    }
    default: {
      return state;
    }
  }
};

export default showLoader;