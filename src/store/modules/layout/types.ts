export enum LayoutActionsTypes {
  SIDEBAR_TOGGLE = "@layout/SIDEBAR_TOGGLE",
  THEME_TOGGLE = "@layout/THEME_TOGGLE",
}

export interface LayoutState {
  sidebar: {
    isOpen: boolean;
  };
  isDarkTheme?: boolean;
}
