import { combineReducers } from "@reduxjs/toolkit";

import { reducers as layout } from "./layout";

export const rootReducer = combineReducers({
  layout,
});

export type RootState = ReturnType<typeof rootReducer>;
