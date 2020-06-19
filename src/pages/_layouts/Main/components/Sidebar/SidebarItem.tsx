import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import { useStyles } from "./styles";

interface Props {
  icon: FC<SvgIconProps>;
  label: string;
  toggle: () => void;
  path: string;
}

export const SidebarItem: FC<Props> = ({ path, icon: Icon, label, toggle }) => {
  const leftSpace = 0;
  const location = useLocation();
  const classes = useStyles({ leftSpace });
  const isSelectedRoute = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  return (
    <ListItem button component={Link} onClick={toggle} to={path} selected={isSelectedRoute}>
      <ListItemIcon className={classes.leftSpacing}>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};
