import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: "10px",
    margin: "10px",
    borderRadius: 5,
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.up("lg")]: { width: "22%" },
  },
  media: {
    height: 200,
    backgroundSize: "contain",
    objectFit: "contain",
  },
  section: {
    display: "flex",
    marginBottom: "10px",
  },
  listType: {
    paddingLeft: "24px",
  },
  listStyle: {
    paddingBottom: 6,
  },
}));
