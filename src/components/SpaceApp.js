import React,{useState} from 'react'
import Filter from "./filter";
import SpaceList from "./spaceList";
import {makeStyles} from '@material-ui/core'

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
  const [spaceData,setSpaceData] = useState(null)
  const [loading, setLoading] = useState(true);

  const updateData = (launchData)=>{
    setSpaceData(launchData)
  }


  const updateLoading = (value) => {
    setLoading(value);
  };
  const classes = styles()
  return (
    <div className={classes.root}>
      <Filter onUpdateFilterData={updateData} onUpdateLoadState = {updateLoading} />
      <SpaceList launchData={spaceData} loading={loading} />
    </div>
  );
}