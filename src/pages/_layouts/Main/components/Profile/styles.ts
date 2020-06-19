import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.primary.main,
    color: palette.common.white,
  },
  avatar: {
    border: `1px solid ${palette.common.white}`,
    width: 45,
    height: 45,
    marginRight: spacing(2),
  },
  arrowIcon: {
    color: palette.common.white,
  },
}));
