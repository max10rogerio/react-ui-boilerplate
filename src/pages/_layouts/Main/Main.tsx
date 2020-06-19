import React, { FC } from "react";

import { useMobile } from "hooks/useMobile";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { useStyles } from "./styles";

export const Main: FC = ({ children }) => {
  const classes = useStyles();
  const isMobile = useMobile();

  const contentShift = !isMobile ? classes.contentShift : "";

  return (
    <div className={classes.root}>
      <div className={classes.fullWidth}>
        <div className={classes.toolbar} />
        <Header />
        <Sidebar />
        <main className={contentShift}>{children}</main>
      </div>
    </div>
  );
};
