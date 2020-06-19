import React, { FC } from "react";

import { Drawer, List } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeOutlined";

import { useAppSelector, useAppDispatch } from "store";
import { toggleSidebar } from "store/modules/layout";
import { useMobile } from "hooks/useMobile";

import { Profile } from "../Profile";
import { SidebarItem } from "./SidebarItem";
import { useStyles } from "./styles";

export const Sidebar: FC = () => {
  const classes = useStyles({ leftSpace: 0 });
  const isMobile = useMobile();
  const open = useAppSelector((state) => state.layout.sidebar.isOpen);
  const dispatch = useAppDispatch();

  const drawerVariant = isMobile ? "temporary" : "permanent";

  return (
    <Drawer
      open={open}
      onClose={() => dispatch(toggleSidebar())}
      className={classes.drawer}
      variant={drawerVariant}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {!isMobile && <div className={classes.toolbar} />}
      <Profile />
      <div className={classes.container} role="presentation">
        <List disablePadding className={classes.list}>
          <SidebarItem icon={HomeIcon} toggle={() => dispatch(toggleSidebar())} label="Home" path="/" />
        </List>
      </div>
    </Drawer>
  );
};
