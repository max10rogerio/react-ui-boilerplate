import { createAction } from "@reduxjs/toolkit";

import { LayoutActionsTypes } from "./types";

export const toggleSidebar = createAction<void>(LayoutActionsTypes.SIDEBAR_TOGGLE);
export const toggleTheme = createAction<void>(LayoutActionsTypes.THEME_TOGGLE);
