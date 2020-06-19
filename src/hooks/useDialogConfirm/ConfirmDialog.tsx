import React, { FC, useState } from "react";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@material-ui/core";

import { ProgressButton } from "components/Buttons/Progress";

export interface Props {
  hide: () => void;
  title?: string;
  content?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: Function;
}

export const ConfirmDialog: FC<Props> = ({
  hide,
  title = "Deseja executar essa ação?",
  content,
  cancelText = "Não",
  confirmText = "Sim",
  onConfirm,
}) => {
  const [loading, setLoading] = useState(false);

  const handleComplete = async () => {
    setLoading(true);
    await onConfirm();
  };

  return (
    <Dialog open onClose={hide} maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      {content && (
        <DialogContent>
          <Typography>{content}</Typography>
        </DialogContent>
      )}
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={hide}>
          {cancelText}
        </Button>
        <ProgressButton
          label={confirmText}
          color="primary"
          variant="outlined"
          loading={loading}
          type="button"
          onClick={handleComplete}
        />
      </DialogActions>
    </Dialog>
  );
};
