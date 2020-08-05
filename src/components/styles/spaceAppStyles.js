import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cad0d6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#cad0d6",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
    },
  },
}));
