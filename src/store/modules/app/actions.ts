import { createAction } from "@reduxjs/toolkit";
import { AppActionTypes } from "./types";

export const resetStore = createAction<void>(AppActionTypes.RESET_STORE);
