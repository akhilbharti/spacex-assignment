import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
const useStyles = makeStyles((theme) => ({
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
  },
  section: {
    display: "flex",
    marginBottom: "10px",
  },
}));
function SpaceCardSkeleton(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Skeleton animation="wave" variant="rect" className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Skeleton
              animation="wave"
              height={15}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <Skeleton
              animation="wave"
              height={10}
              width="40%"
              style={{ marginBottom: 6 }}
            />
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <Skeleton
              animation="wave"
              height={10}
              width="40%"
              style={{ marginBottom: 6 }}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SpaceCardSkeleton;
