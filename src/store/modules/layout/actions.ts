import { createAction } from "@reduxjs/toolkit";

export enum LayoutActionsTypes {
  SIDEBAR_TOGGLE = "@layout/SIDEBAR_TOGGLE",
  THEME_TOGGLE = "@layout/THEME_TOGGLE",
}

export const toggleSidebar = createAction<void>(LayoutActionsTypes.SIDEBAR_TOGGLE);
export const toggleTheme = createAction<void>(LayoutActionsTypes.THEME_TOGGLE);
