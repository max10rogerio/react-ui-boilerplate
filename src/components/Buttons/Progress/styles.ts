import { makeStyles } from "@material-ui/core";

import { ProgressButtonColors } from "./index";

export default makeStyles(({ palette }) => ({
  rootButton: {
    display: "flex",
    alignItems: "center",
  },
  wrapperButton: {
    position: "relative",
  },
  buttonProgress: {
    color: ({ color = "primary" }: { color: ProgressButtonColors }): string => palette[color].main,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  button: {
    float: "right",
  },
}));
