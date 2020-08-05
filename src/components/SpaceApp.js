import React from 'react'
import Filter from "./filter";
import SpaceList from "./spaceList";
import {makeStyles} from '@material-ui/core'
import { useRouteMatch } from "react-router-dom";

const styles = makeStyles((theme) => ({
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
export default function SpaceApp(props){
  const classes = styles()
  const match = useRouteMatch();
  return (
    <div className={classes.root}>
      <Filter />
      <SpaceList />
    </div>
  );
}