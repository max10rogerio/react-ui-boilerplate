import React, { FC } from "react";

import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { useAppSelector } from "store";
import { darkTheme, defaultTheme } from "assets/themes";

export const Theme: FC = ({ children }) => {
  const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDarkTheme = useAppSelector((state) => state.layout.isDarkTheme);
  const theme =
    isDarkTheme === undefined ? (darkOS ? darkTheme : defaultTheme) : isDarkTheme ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
