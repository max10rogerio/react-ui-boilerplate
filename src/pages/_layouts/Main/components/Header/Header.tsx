import React, { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import { IconButton, Toolbar, AppBar, Tooltip, Box, Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MoonIcon from "@material-ui/icons/Brightness3";
import SunIcon from "@material-ui/icons/Brightness5";

import { useAppSelector, useAppDispatch } from "store";
import { toggleTheme } from "store/modules/layout";
import { useMobile } from "hooks/useMobile";
import logo from "assets/images/logo.svg";

import { Title } from "../Title";
import { Menu } from "../Menu";

import { useStyles } from "./styles";

export const Header: FC = () => {
  const classes = useStyles();
  const isMobile = useMobile();
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.layout.isDarkTheme);
  const ThemeIcon = useMemo(() => isDarkTheme ? SunIcon : MoonIcon, [isDarkTheme]);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={isMobile ? "" : classes.toolbar}>
          <Menu />
          <Link to="/">
            <Tooltip title="Home">
              <Box ml={1} mr={2}>
                <Avatar src={logo} alt="Logo" />
              </Box>
            </Tooltip>
          </Link>
          <Title />
          <Tooltip title={isDarkTheme ? "Light Theme" : "Dark Theme"}>
            <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
              <ThemeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton color="inherit" onClick={() => alert("logout")}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};
