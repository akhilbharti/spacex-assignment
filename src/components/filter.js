import React, {useEffect} from 'react'
import {styles} from './styles/filterStyles'
const years = [
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];
function Filter(props){
  // const [year, setYear] = useState("");
  // const [isLaunchSuccess, setIsLaunchSuccess] = useState(true);
  // const [isLandingSuccess, setIsLandingSuccess] = useState(true);
  const classes = styles(props)

   return (
    <div className={classes.filterList}>
      Filters
      <div className={classes.filterListWrapper}>
        <div className={classes.filterListHeader}>Launch Year</div>
        <div className={classes.filterListContent}></div>
      </div>
      <div className={classes.filterListWrapper}>
        <div className={classes.filterListHeader}>Successful Launch</div>
        <div className={classes.filterListContent}></div>
      </div>
      <div className={classes.filterListWrapper}>
        <div className={classes.filterListHeader}>Successful Landing</div>
        <div className={classes.filterListContent}></div>
      </div>
    </div>
  );
}export default Filter

