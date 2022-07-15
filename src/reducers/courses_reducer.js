import {
  GET_COURSES_BEGIN,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
  GET_SINGLE_COURSE_BEGIN,
  GET_SINGLE_COURSE_SUCCESS,
  GET_SINGLE_COURSE_ERROR,
  GET_COURSE_CATEGORIES_BEGIN,
  GET_COURSE_CATEGORIES_SUCCESS,
  GET_COURSE_CATEGORIES_ERROR,
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

  if (action.type === GET_SINGLE_COURSE_BEGIN) {
    return {
      ...state,
      single_course_loading: true,
    };
  }

  if (action.type === GET_SINGLE_COURSE_SUCCESS) {
    return {
      ...state,
      single_course_loading: false,
      single_course: action.payload,
    };
  }

  if (action.type === GET_SINGLE_COURSE_ERROR) {
    return {
      ...state,
      single_course_loading: false,
      single_course_error: true,
    };
  }

  if (action.type === GET_COURSE_CATEGORIES_BEGIN) {
    return {
      ...state,
      course_categories_loading: true,
    };
  }

  if (action.type === GET_COURSE_CATEGORIES_SUCCESS) {
    return {
      ...state,
      course_categories_loading: false,
      course_categories: action.payload,
    };
  }

  if (action.type === GET_COURSE_CATEGORIES_ERROR) {
    return {
      ...state,
      course_categories_loading: false,
      course_categories_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default courses_reducer;
