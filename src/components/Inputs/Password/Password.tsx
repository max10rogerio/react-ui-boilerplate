import React, { useState, FC } from "react";

import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField";

import EyeIcon from "@material-ui/icons/VisibilityOutlined";
import EyeOffIcon from "@material-ui/icons/VisibilityOffOutlined";

export const Password: FC<TextFieldProps> = (props) => {
  const [show, setShow] = useState(false);

  return (
    <TextField
      type={show ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShow(!show)}>{show ? <EyeOffIcon /> : <EyeIcon />}</IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
