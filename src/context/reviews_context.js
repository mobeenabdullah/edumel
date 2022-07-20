import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/reviews_reducer";
import { all_reviews_url } from "../utils/constants";

import {
  GET_REVIEWS_BEGIN,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_ERROR,
} from "../actions";

const initialState = {
  reviews_loading: false,
  reviews_all: [],
  reviews_error: false,
};

const ReviewsContext = React.createContext();

export const ReviewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "ReviewsProvider");

  const fetchReviews = async (url) => {
    dispatch({ type: GET_REVIEWS_BEGIN });
    try {
      const response = await axios.get(url);
      const reviews = response.data;
      dispatch({ type: GET_REVIEWS_SUCCESS, payload: reviews });
    } catch (error) {
      dispatch({ type: GET_REVIEWS_ERROR, payload: error });
    }
  };

  useEffect(() => {
    fetchReviews(all_reviews_url);
  }, []);

  return (
    <ReviewsContext.Provider value={{ ...state }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviewsContext = () => {
  return useContext(ReviewsContext);
};
