import {
  GET_REVIEWS_BEGIN,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR,
} from "../actions";

const reviews_reducer = (state, action) => {
  console.log(state, "revoews_reducers");
  if (action.type === GET_REVIEWS_BEGIN) {
    return {
      ...state,
      reviews_loading: true,
    };
  }

  if (action.type === GET_REVIEWS_SUCCESS) {
    return {
      ...state,
      reviews_loading: false,
      reviews_all: action.payload,
    };
  }

  if (action.type === GET_REVIEWS_ERROR) {
    return {
      ...state,
      reviews_loading: false,
      reviews_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reviews_reducer;
