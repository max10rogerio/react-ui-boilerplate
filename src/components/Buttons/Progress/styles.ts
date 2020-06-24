import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  rootButton: {
    display: "flex",
    alignItems: "center",
  },
  wrapperButton: {
    position: "relative",
  },
  buttonProgress: {
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
