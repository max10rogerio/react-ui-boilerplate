import * as React from "react";

import { IconButton, MenuItem, ListItemIcon, ListItemText, Tooltip } from "@material-ui/core";

export interface ContextMenuItemProps {
  /**
   * Menu title or tooltip when device screen is mobile
   */
  title: string;
  /**
   * When do you have many items in menu, this property only show where fixed is true (only in devices screen > tablet) and group the others items
   */
  fixed: boolean;
  /**
   * Show a only icon when screen isn't mobile and show icon and title when screen is mobile
   */
  icon: Function;
  /**
   * Function to call when clicked
   */
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

ContextMenuItem.defaultProps = {
  fixed: true,
};

ContextMenuItem.displayName = "ContextMenuItem";
