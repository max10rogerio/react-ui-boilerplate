import React, { FC } from "react";

import Button, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "./styles";
import { ProgressButtonColors } from "./index";

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
  /**
   * Color of circular progress bar
   */
  color?: ProgressButtonColors;
}

export const ProgressButton: FC<Props> = ({ loading, disabled, label = "Submit", color = "primary", ...props }) => {
  const classes = useStyles({ color });

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
