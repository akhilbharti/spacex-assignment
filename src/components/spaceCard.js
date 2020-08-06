import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "./styles/spaceCardStyles";
import Img from "react-cool-img";
import errorImg from "../error.png";

/* SpaceCard Component: to map the data accordingly
 * the data is recevied via props from spaceList to render individual card component
 */
function SpaceCard(props) {
  const { data } = props;
  // desstructuring of data
  const {
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    mission_id,
    links: { mission_patch_small, wikipedia: article_link },
    rocket,
  } = data;
  const {
    first_stage: { cores },
  } = rocket;
  const vals = cores.map((value) => value.land_success);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* mission Image  */}
      <div className={classes.media}>
        <Img
          // placeholder={loadingImg}
          src={mission_patch_small}
          error={errorImg}
          height="200px"
          width="200px"
          alt="mission_name"
        />
      </div>
      {/* <CardMedia
          className={classes.media}
          image={mission_patch_small}
          component="img"
          title={mission_name}
        /> */}
      <CardContent>
        {/* Mission Name and flight number*/}
        <a href={article_link} target="_blank" rel="noopener noreferrer">
          <Typography variant="h6" gutterBottom className={classes.heading}>
            {mission_name}#{flight_number}
          </Typography>
        </a>
        {/* mission Ids */}
        <div className={classes.section}>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subheader}
          >
            Mission Ids:
          </Typography>

          {mission_id.length > 0 ? (
            <ul className={classes.listType}>
              {/* check whether  recieved varaiable is array or not*/}
              {Array.isArray(mission_id) &&
                mission_id.map((id) => (
                  <li key={id} className={classes.listStyle}>
                    {id}
                  </li>
                ))}
            </ul>
          ) : (
            <Typography
              variant="body2"
              gutterBottom
              className={classes.subheader}
            >
              No Id Available
            </Typography>
          )}
        </div>
        {/* mission launch year */}
        <div className={classes.section}>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subheader}
          >
            Launch Year:
          </Typography>
          <Typography variant="body2" gutterBottom>
            {launch_year}
          </Typography>
        </div>
        {/* Mission launch success */}
        <div className={classes.section}>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subheader}
          >
            Successful Launch:
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`${launch_success}`}
          </Typography>
        </div>
        {/* Mission SUccess landing */}
        <div className={classes.section}>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subheader}
          >
            Successful Landing:
          </Typography>
          <Typography variant="body2" gutterBottom>
            {!vals[0] ? "not available" : `${vals[0]}`}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default React.memo(SpaceCard);
