import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    height:500,
    maxWidth: 345,
    cursor:"default",
    // height:"100%",
    margin: "10px",
    borderRadius: 5,
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.up("lg")]: { width: "22%" },
    ""
  },
  media: {
    height: 200,
    objectFit: "scale-down",
    textAlign: "center",
    backgroundColor: "#afa6a61f",

  },
  section: {
    display: "flex",
    marginBottom: "5px",
  },
  heading: {
    fontSize: "1.1rem",
  },
  subheader: {
    fontWeight: "bold",
    paddingRight: "2px",
  },
  listType: {
    paddingLeft: "24px",
  },
  listStyle: {
    paddingBottom: 6,
  },
}));
