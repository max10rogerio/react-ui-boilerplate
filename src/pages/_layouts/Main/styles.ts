import { makeStyles } from "@material-ui/core";

import { STYLES } from "utils/constants";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    marginBottom: 20,
    overflowX: "hidden",
  },
  root: {
    display: "flex",
  },
  fullWidth: {
    width: "100%",
  },
  contentShift: {
    marginLeft: STYLES.DRAWER_WIDTH,
  },
}));
