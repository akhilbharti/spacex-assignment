import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import SpaceCard from "./spaceCard";
import SpaceCardSkeleton from './spaceCardSkeleton'
import { makeStyles } from "@material-ui/core";
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
function SPaceList(props) {
  const url = `https://api.spacexdata.com/v3/launches`;
  const [launchData, setLaunchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const param = {
    limit: 100,
  };
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError({});
      const fetchInitialData = await axios.get(url, { params: param });
      setLaunchData(fetchInitialData.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, param]);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = useStyles();
  const spaceLaunches = launchData.map((launch) => {
    return (
      <SpaceCard key={launch.flight_number} data={launch} loading={loading} />
    );
  });
  const spaceLaunchesSkeleton = Array.from(
    { length: 25 },
    (v, i) => i
  ).map((i) => <SpaceCardSkeleton/>);
  return <div className={classes.root}>{loading?spaceLaunchesSkeleton:spaceLaunches}</div>;
}

export default SPaceList;
