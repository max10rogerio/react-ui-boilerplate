import * as React from "react";

import { IconButton, Menu } from "@material-ui/core";
import VerticalDotsIcon from "@material-ui/icons/MoreVert";

import { useMobile } from "hooks/useMobile";

import { ContextMenuItemProps } from "./ContextMenuItem";

export const ContextMenu: React.FC<{}> = ({ children }) => {
  const isMobile = useMobile();
  const [anchorEl, setAnchorEl] = React.useState<any>(undefined);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(undefined);
  };

  let childrenArray = React.Children.toArray(children) as React.ReactElement<ContextMenuItemProps>[];

  if (isMobile) {
    childrenArray = childrenArray.map((c) => React.cloneElement(c, { fixed: false })) as React.ReactElement<
      ContextMenuItemProps
    >[];
  }

  const buttons: React.ReactNode[] = childrenArray.filter((c) => c.props.fixed || c.props.fixed === undefined);
  const menu: React.ReactNode[] = childrenArray
    .filter((c) => c.props.fixed === false)
    .map((c) =>
      React.cloneElement(c, {
        onClick: (e: React.SyntheticEvent) => {
          handleClose();
          return c.props.onClick(e);
        },
      }),
    );

  return (
    <>
      {buttons.length > 0 && buttons.map((b) => b)}
      {menu.length > 0 && (
        <>
          <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
            <VerticalDotsIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {menu}
          </Menu>
        </>
      )}
    </>
  );
};
