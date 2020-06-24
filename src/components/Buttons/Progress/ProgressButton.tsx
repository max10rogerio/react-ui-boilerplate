import React, { FC } from "react";

import Button, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useStyles } from "./styles";

interface Props extends ButtonProps {
  /**
   * Display a circular progress bar
   */
  loading: boolean;
  /**
   * Disabled button
   */
  disabled?: boolean;
  /**
   * Label button
   */
  label?: string;
}

export const ProgressButton: FC<Props> = ({ loading, disabled, label = "Submit", ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.rootButton}>
      <div className={classes.wrapperButton}>
        <Button disabled={loading || disabled} className={classes.button} {...props}>
          {label}
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
};
