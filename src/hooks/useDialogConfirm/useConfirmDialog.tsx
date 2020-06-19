import React, { useState, useCallback } from "react";

import { ConfirmDialog, Props as ConfirmDialogProps } from "./ConfirmDialog";

type DialogDefaults = Pick<ConfirmDialogProps, "cancelText" | "confirmText" | "content" | "title">;

interface UseDialogParams<T> {
  onConfirmed: (payload: T, hide: Function) => void;
  defaults: DialogDefaults;
}

export interface UseDialog<T> {
  show: (payload: T) => void;
  hide: () => void;
  RenderDialog: Function;
}

export const useConfirmDialog = <T extends any>({ onConfirmed, defaults }: UseDialogParams<T>): UseDialog<T> => {
  const [visible, setVisible] = useState(false);
  const [payload = {}, setPayload] = useState<any>();
  const hide = useCallback(() => setVisible(false), []);

  const show = useCallback((currentPayload: T) => {
    setPayload(currentPayload);
    setVisible(true);
  }, []);

  const RenderDialog = useCallback((): JSX.Element | null => {
    if (!visible) {
      return null;
    }

    return <ConfirmDialog hide={hide} onConfirm={() => onConfirmed(payload, hide)} {...defaults} />;
    // eslint-disable-next-line
  }, [visible])

  return {
    show,
    hide,
    RenderDialog,
  };
};
