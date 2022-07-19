import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/options_reducer";
import { options_url } from "../utils/constants";

import {
  GET_OPTIONS_BEGIN,
  GET_OPTIONS_SUCCESS,
  GET_OPTIONS_ERROR,
} from "../actions";

const initialState = {
  options_loading: false,
  options: {},
  options_error: false,
};

const OptionsContext = React.createContext();

export const OptionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchOptions = async (url) => {
    dispatch({ type: GET_OPTIONS_BEGIN });
    try {
      const response = await axios.get(url);
      const options = response.data;
      dispatch({ type: GET_OPTIONS_SUCCESS, payload: options });
    } catch (error) {
      dispatch({ type: GET_OPTIONS_ERROR, payload: error });
    }
  };

  useEffect(() => {
    fetchOptions(options_url);
  }, []);

  return (
    <OptionsContext.Provider value={{ ...state }}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptionsContext = () => {
  return useContext(OptionsContext);
};
