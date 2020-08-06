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
  header: {
    fontWeight: "bold",
    fontSize: "xx-large",
    backgroundColor: "#cad0d6",
    paddingLeft: "30px",
  },
  footer: {
    position: "fixed",
    left: "auto",
    bottom: 0,
    display: "flex",
    fontSize: "medium",
    justifyContent: "center",
    top: "auto",
    width: "100%",
    borderTop: "1px solid hsla(0, 0%, 100%, 0.35)",
    backgroundColor: "#edf5d9",
    zIndex: 10,
    cursor: "pointer",
  },
}));
