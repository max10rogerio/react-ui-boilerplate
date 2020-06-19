import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

const primary = blue;
const secondary = red;

export const defaultTheme = createMuiTheme({
  palette: {
    primary,
    secondary,
    grey,
  },
  typography: {
    fontFamily: "Roboto",
  },
  props: {
    MuiTextField: {
      variant: "outlined",
      fullWidth: true,
    },
    MuiButton: {
      variant: "contained",
      color: "primary",
    },
    MuiLinearProgress: {
      variant: "indeterminate",
      color: "secondary",
    },
    MuiTabs: {
      indicatorColor: "primary",
      textColor: "primary",
    },
    MuiDialog: {
      maxWidth: "md",
      fullWidth: true,
    },
  },
});
