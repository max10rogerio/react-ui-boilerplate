import React, { FC } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { TextField, Button, Grid } from "@material-ui/core";

import { useApplyProps } from "hooks/useApplyProps";
import { useStyles } from "../styles";

interface IForm {
  email: string;
  password: string;
}

const schema = Yup.object().shape<IForm>({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export const Form: FC = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<IForm>({
    validationSchema: schema,
  });

  const onSubmit = (data: IForm) => alert(JSON.stringify(data));
  const applyProps = useApplyProps({ register, errors });

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <TextField label="Email Address" autoFocus {...applyProps("email")} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type="password" {...applyProps("password")} />
        </Grid>
        <Grid container>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
