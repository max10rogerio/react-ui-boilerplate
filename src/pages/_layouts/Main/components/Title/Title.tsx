import React, { FC } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

import { useStyles } from "./styles";

export const Title: FC = () => {
  const classes = useStyles();

  return (
    <List disablePadding className={classes.title}>
      <ListItem dense disableGutters>
        <ListItemText
          className={classes.titleListText}
          primary="React-UI Boilerplate"
          primaryTypographyProps={{
            variant: "h6",
          }}
        />
      </ListItem>
    </List>
  );
};
