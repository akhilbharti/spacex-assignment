import React from "react";
import SpaceCard from "./spaceCard";
import SpaceCardSkeleton from './spaceCardSkeleton'
import { makeStyles } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import useFetch from '../fetcher'
const useStyles = makeStyles(theme=>({
  root: {
    width: "85%",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap:"wrap",
    },
  },
}));
function SpaceList(props) {
  const url = `https://api.spacexdata.com/v3/launches`;
  const match = useRouteMatch();
  const paramVal = { ...match.params };
  let param 
  if (isNaN(paramVal.year))
     {
       param = {
      limit: 100,
    }
  } 
  else {
     param = {
       limit: 100,
       luanch_year: paramVal.year,
       luanch_success: paramVal.luanch,
       land_success: paramVal.land,
     };
   }
    const { loading, launchData } = useFetch(url, param, match.url);

  const classes = useStyles();
  const spaceLaunches = launchData.map((launch) => {
    return (
      <SpaceCard key={launch.flight_number} data={launch} loading={loading} />
    );
  });
  const spaceLaunchesSkeleton = Array.from(
    { length: 25 },
    (v, i) => i
  ).map((i) => <SpaceCardSkeleton key={i}/>);
  return <div className={classes.root}>{loading?spaceLaunchesSkeleton:spaceLaunches}</div>;
}

export default React.memo(SpaceList);
