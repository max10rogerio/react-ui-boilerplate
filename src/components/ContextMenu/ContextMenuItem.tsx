import * as React from "react";

import { IconButton, MenuItem, ListItemIcon, ListItemText, Tooltip } from "@material-ui/core";

export interface ContextMenuItemProps {
  title: string;
  fixed?: boolean;
  icon: Function;
  onClick: (e: React.SyntheticEvent) => void;
}

export const ContextMenuItem: React.FC<ContextMenuItemProps> = React.forwardRef(
  ({ title, fixed, icon: Icon, onClick }, ref) => {
    if (fixed) {
      return (
        <Tooltip title={title}>
          <IconButton onClick={onClick}>
            <Icon />
          </IconButton>
        </Tooltip>
      );
    }

    return (
      <MenuItem innerRef={ref} onClick={onClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </MenuItem>
    );
  },
);

ContextMenuItem.displayName = "ContextMenuItem";
