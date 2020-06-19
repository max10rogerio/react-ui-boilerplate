import React, { FC } from "react";

import Button, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "./styles";
import { ProgressButtonColors } from "./index";

interface Props extends ButtonProps {
  loading: boolean;
  disabled?: boolean;
  label?: string;
  color?: ProgressButtonColors;
}

export const ProgressButton: FC<Props> = ({ loading, disabled, label, color = "primary", ...props }) => {
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

ProgressButton.defaultProps = {
  disabled: false,
  label: "SALVAR",
  color: "primary",
};
