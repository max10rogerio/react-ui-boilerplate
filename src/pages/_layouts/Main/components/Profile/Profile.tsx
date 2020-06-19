import React from "react";
import { Link } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Tooltip,
  ListItemSecondaryAction,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRightAlt";
import avatar from "assets/images/icons/user.svg";

import { useAppDispatch } from "store";
import { toggleSidebar } from "store/modules/layout";

import { useStyles } from "./styles";

export const Profile = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <List className={classes.root}>
      <ListItem button component={Link} to={`/profile/`} onClick={() => dispatch(toggleSidebar())}>
        <ListItemAvatar>
          <Avatar src={avatar} alt="Imagem do usuário" className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          primaryTypographyProps={{ variant: "h6" }}
          secondary="johndoe@email.com"
          secondaryTypographyProps={{ color: "inherit" }}
        />
        <ListItemSecondaryAction>
          <Tooltip title="Profile">
            <Link to={`/profile`}>
              <IconButton onClick={() => dispatch(toggleSidebar())}>
                <ArrowRightIcon className={classes.arrowIcon} />
              </IconButton>
            </Link>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
