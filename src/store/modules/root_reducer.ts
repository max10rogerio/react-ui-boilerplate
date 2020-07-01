import { combineReducers, Reducer, AnyAction } from "@reduxjs/toolkit";

import { reducers as layout } from "./layout";
import { AppActionTypes } from "./app";

export const combinedReducers = combineReducers({
  layout,
});

export type RootState = ReturnType<typeof combinedReducers>;

export const rootReducer: Reducer<RootState> = (state, action: AnyAction) => {
  if (action.type === AppActionTypes.RESET_STORE) {
    return combinedReducers(undefined, action);
  }

  return combinedReducers(state, action);
};
