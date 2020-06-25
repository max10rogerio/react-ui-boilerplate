import React from "react";
import { Link } from "react-router-dom";

import { Avatar, Box, Typography, Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { useStyles } from "./styles";
import { Copyright } from "./components/Copyright";
import { Form } from "./components/Form";

export const SignIn = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form />
      </div>
      <Box textAlign="center">
        <Link to="/dashboard">View dashboard example</Link>
      </Box>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
};
