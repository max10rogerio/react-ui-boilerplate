import React, { FC } from "react";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { useAppSelector } from "store";
import { darkTheme, defaultTheme } from "assets/themes";

export const Theme: FC = ({ children }) => {
  const isDarkTheme = useAppSelector((state) => state.layout.isDarkTheme);
  const theme = isDarkTheme ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
