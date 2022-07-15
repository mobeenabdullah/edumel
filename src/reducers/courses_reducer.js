import {
  GET_COURSES_BEGIN,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
} from "../actions";

const courses_reducer = (state, action) => {
  if (action.type === GET_COURSES_BEGIN) {
    return {
      ...state,
      courses_loading: true,
    };
  }

  if (action.type === GET_COURSES_SUCCESS) {
    const popular_courses = action.payload.filter(
      (course) => course.popular === true
    );
    return {
      ...state,
      courses_loading: false,
      courses: action.payload,
      popular_courses,
    };
  }

  if (action.type === GET_COURSES_ERROR) {
    return {
      ...state,
      courses_loading: false,
      courses_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default courses_reducer;
