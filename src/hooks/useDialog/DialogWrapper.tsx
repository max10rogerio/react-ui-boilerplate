import React, { FC } from "react";

import { Dialog, DialogTitle } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export interface Props {
  hide: () => void;
  title?: string;
  maxWidth?: Breakpoint;
}

export const DialogWrapper: FC<Props> = ({ hide, children, title = "", maxWidth = "md" }) => {
  return (
    <Dialog open onClose={hide} maxWidth={maxWidth}>
      <DialogTitle>{title}</DialogTitle>
      <>{children}</>
    </Dialog>
  );
};
