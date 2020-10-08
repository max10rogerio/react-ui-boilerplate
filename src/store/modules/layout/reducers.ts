import { createReducer } from "@reduxjs/toolkit";

import { LayoutActionsTypes, LayoutState } from "./types";

const INITIAL_STATE: LayoutState = {
  sidebar: {
    isOpen: false,
  },
  isDarkTheme: false,
};

export const reducers = createReducer(INITIAL_STATE, {
  [LayoutActionsTypes.SIDEBAR_TOGGLE]: (state) => {
    return {
      ...state,
      sidebar: {
        isOpen: !state.sidebar.isOpen,
      },
    };
  },
  [LayoutActionsTypes.THEME_TOGGLE]: (state) => {
    return {
      ...state,
      isDarkTheme: state.isDarkTheme ? undefined : state.isDarkTheme === undefined ? false : true,
    };
  },
});
