import React, { FC, ReactNode } from "react";
import { useSnackbar, OptionsObject, SnackbarProvider } from "notistack";

import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

let snackFunction: Function | null = null;

export const getGlobalSnack = () => snackFunction;

export const showSnack = (message = "", options: OptionsObject = {}) => {
  const snack = getGlobalSnack();

  if (!snack) {
    return;
  }

  return snack(message, options);
};

export const snack = {
  error: (message = "Erro") => showSnack(message, { variant: "error" }),
  success: (message = "Sucesso") => showSnack(message, { variant: "success" }),
  warning: (message = "Atenção") => showSnack(message, { variant: "warning" }),
  info: (message = "Info") => showSnack(message, { variant: "info" }),
};

export const GlobalSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  snackFunction = enqueueSnackbar;

  return null;
};

export const CloseSnackButton: FC<{ snackKey: string | number | undefined } & OptionsObject> = ({ snackKey }) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton size="small" color="inherit" onClick={() => closeSnackbar(snackKey)}>
      <CloseIcon />
    </IconButton>
  );
};

export const GlobalSnackbarProvider: FC = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        horizontal: "right",
        vertical: "bottom",
      }}
      action={(key): ReactNode => <CloseSnackButton snackKey={key} />}
    >
      {children}
    </SnackbarProvider>
  );
};
