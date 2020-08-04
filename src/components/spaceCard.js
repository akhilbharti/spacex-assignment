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
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  section: {
    display: "flex",
    marginBottom: "10px",
  },
});

function SpaceCard(props) {
  const {loading,data} = props
  const {
    flight_number,
    mission_name,
    mission_id,
    launch_year,
    launch_success,
    links,
    rocket,
  } = data;
  const {
    first_stage: { cores },
  } = rocket;
  const vals = cores.map((value) => value.land_success);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={links.mission_patch_small}
          title={mission_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {mission_name}#{flight_number}
          </Typography>
          <div className={classes.section}>
            <Typography variant="subtitle2" gutterBottom>
              Launch Year:
            </Typography>
            <Typography variant="body2" gutterBottom>
              {launch_year}
            </Typography>
          </div>
          <div className={classes.section}>
            <Typography variant="subtitle2" gutterBottom>
              Successful Launch:
            </Typography>
            <Typography variant="body2" gutterBottom>
              {`${launch_success}`}
            </Typography>
          </div>
          <div className={classes.section}>
            <Typography variant="subtitle2" gutterBottom>
              Successful Landing:
            </Typography>
            <Typography variant="body2" gutterBottom>
              {!vals[0] ? "not available" : `${vals[0]}`}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SpaceCard;
