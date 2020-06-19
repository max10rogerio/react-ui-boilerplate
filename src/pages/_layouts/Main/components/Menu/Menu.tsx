import React, { FC } from "react";

import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { useMobile } from "hooks/useMobile";
import { useAppDispatch } from "store";
import { toggleSidebar } from "store/modules/layout";

export const Menu: FC = () => {
  const isMobile = useMobile();
  const dispatch = useAppDispatch();

  if (!isMobile) {
    return null;
  }

  return (
    <IconButton edge="start" color="inherit" aria-label="Menu" onClick={() => dispatch(toggleSidebar())}>
      <MenuIcon />
    </IconButton>
  );
};
