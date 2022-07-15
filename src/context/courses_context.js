import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/courses_reducer";
import { courses_url as url } from "../utils/constants";

import {
  GET_COURSES_BEGIN,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
} from "../actions";

const initialState = {
  courses_loading: false,
  courses_error: false,
  courses: [],
  popular_courses: [],
};

const CoursesContext = React.createContext();

export const CoursesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCourses = async () => {
    dispatch({ type: GET_COURSES_BEGIN });
    try {
      const response = await axios.get(url);
      const courses = response.data;
      dispatch({ type: GET_COURSES_SUCCESS, payload: courses });
    } catch (error) {
      dispatch({ type: GET_COURSES_ERROR, payload: error });
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <CoursesContext.Provider value={{ ...state }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  return useContext(CoursesContext);
};
