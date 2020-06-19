import { makeStyles, Theme } from "@material-ui/core";

import { STYLES } from "utils/constants";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexGrow: 1,
  },
  drawer: {
    width: STYLES.DRAWER_WIDTH,
  },
  drawerPaper: {
    width: STYLES.DRAWER_WIDTH,
    overflow: "hidden",
  },
  leftSpacing: {
    paddingLeft: ({ leftSpace = 0 }: { leftSpace?: number }): number => theme.spacing(leftSpace * 2),
  },
  list: {
    width: "100%",
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
}));
