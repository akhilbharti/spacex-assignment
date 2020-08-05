import React,{useState} from 'react'
import Filter from "./filter";
import SpaceList from "./spaceList";
import {styles} from './styles/spaceAppStyles'

/*
 * Space Page component:
 * Its contains: Filters and SpaceList component
 *
 * For SpaceList: Render items for first time through match.parms from react-router-dom
 * as filter is updated data is passed from filter to spacelist through here
 * 
 * For Filters method to set the data is passed from here after making successful
 * api request data is passed to spaceList for mapping action
 */
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