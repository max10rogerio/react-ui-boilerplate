import React, { useState, useCallback } from "react";

import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

import { DialogWrapper } from "./DialogWrapper";

export interface UseDialog {
  show: () => void;
  hide: () => void;
  RenderDialog: Function;
}

interface Options {
  maxWidth?: Breakpoint;
}

export interface UseDialogParams {
  title?: string;
  customClose?: (hide: () => void) => void;
  options?: Options;
}

export const useDialog = ({ title = "", customClose, options = {} }: UseDialogParams): UseDialog => {
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => setVisible(true), []);
  const hide = useCallback(() => {
    if (customClose) {
      const hidden = () => setVisible(false);
      customClose(hidden);
    } else {
      setVisible(false);
    }
  }, [customClose]);

  const RenderDialog = ({ children }: { children: React.ReactChild }): JSX.Element | null => {
    if (!visible) {
      return null;
    }

    return (
      <DialogWrapper hide={hide} title={title} {...options}>
        {children}
      </DialogWrapper>
    );
  };

  return {
    show,
    hide,
    RenderDialog,
  };
};
