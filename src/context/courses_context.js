import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/courses_reducer";
import { courses_url } from "../utils/constants";

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
  GET_COURSE_REVIEWS_BEGIN,
  GET_COURSE_REVIEWS_SUCCESS,
  GET_COURSE_REVIEWS_ERROR,
} from "../actions";

const initialState = {
  courses_loading: false,
  courses_error: false,
  courses: [],
  popular_courses: [],
  single_course_loading: false,
  single_course_error: false,
  single_course: {},
  course_categories_loading: false,
  course_categories_error: false,
  course_categories: [],
  course_reviews_loading: false,
  course_reviews_error: false,
  course_reviews: [],
};

const CoursesContext = React.createContext();

export const CoursesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCourses = async (url) => {
    dispatch({ type: GET_COURSES_BEGIN });
    try {
      const response = await axios.get(url);
      const courses = response.data;
      dispatch({ type: GET_COURSES_SUCCESS, payload: courses });
    } catch (error) {
      dispatch({ type: GET_COURSES_ERROR, payload: error });
    }
  };

  const fetchSingleCourse = async (url) => {
    dispatch({ type: GET_SINGLE_COURSE_BEGIN });
    try {
      const response = await axios.get(url);
      const course = response.data;
      dispatch({ type: GET_SINGLE_COURSE_SUCCESS, payload: course });
    } catch (error) {
      dispatch({ type: GET_SINGLE_COURSE_ERROR, payload: error });
    }
  };

  const fetchCourseCategories = async (url) => {
    dispatch({ type: GET_COURSE_CATEGORIES_BEGIN });
    try {
      const response = await axios.get(url);
      const categories = response.data;
      dispatch({ type: GET_COURSE_CATEGORIES_SUCCESS, payload: categories });
    } catch (error) {
      dispatch({ type: GET_COURSE_CATEGORIES_ERROR, payload: error });
    }
  };

  const fetchCourseReviews = async (url) => {
    dispatch({ type: GET_COURSE_REVIEWS_BEGIN });
    try {
      const response = await axios.get(url);
      const course_reviews = response.data;
      dispatch({ type: GET_COURSE_REVIEWS_SUCCESS, payload: course_reviews });
    } catch (error) {
      dispatch({ type: GET_COURSE_REVIEWS_ERROR, payload: error });
    }
  };

  useEffect(() => {
    fetchCourses(courses_url);
  }, []);

  return (
    <CoursesContext.Provider
      value={{
        ...state,
        fetchSingleCourse,
        fetchCourseCategories,
        fetchCourseReviews,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  return useContext(CoursesContext);
};
