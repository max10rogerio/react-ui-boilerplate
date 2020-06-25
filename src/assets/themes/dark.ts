import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
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
