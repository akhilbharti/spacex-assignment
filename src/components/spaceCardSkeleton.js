import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 200,
  },
  section: {
    display: "flex",
    marginBottom: "10px",
  },
});

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
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          </Typography>
          <div className={classes.section}>
            <Typography variant="body2" gutterBottom>
              <Skeleton animation="wave" height={10} width="40%" />
            </Typography>
          </div>
          <div className={classes.section}>
            <Typography variant="body2" gutterBottom>
              <Skeleton animation="wave" height={10} width="40%" />
            </Typography>
          </div>
          <div className={classes.section}>
            <Typography variant="body2" gutterBottom>
              <Skeleton animation="wave" height={10} width="40%" />
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SpaceCardSkeleton;
