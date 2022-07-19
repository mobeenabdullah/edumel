import {
  GET_OPTIONS_BEGIN,
  GET_OPTIONS_SUCCESS,
  GET_OPTIONS_ERROR,
} from "../actions";

const options_reducer = (state, action) => {
  if (action.type === GET_OPTIONS_BEGIN) {
    return {
      ...state,
      options_loading: true,
    };
  }

  if (action.type === GET_OPTIONS_SUCCESS) {
    return {
      ...state,
      options_loading: false,
      options: action.payload,
    };
  }

  if (action.type === GET_OPTIONS_ERROR) {
    return {
      ...state,
      options_loading: false,
      options_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default options_reducer;
