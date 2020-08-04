import React from 'react'
import {styles} from './styles/filterStyles'
import {Button, withStyles} from '@material-ui/core'
import { green } from "@material-ui/core/colors";
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    borderRadius: 5,
    width: 75,
    margin: "10px auto",
    "&:hover": {
      backgroundColor: green[700],
    },
    "&.active": {
      backgroundColor: theme.palette.primary.main,
      color: `${theme.palette.secondary.contrastText}!important`,
      transition: "border-radius .15s cubic-bezier(0.4,0.0,0.2,1)",
    },
  },
}))(Button);
const filterOptions= {
  boolOptions:[
"true","false"
  ],
  years:["2006",
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
  "2020",]
}

function Filter(props){
  // const [year, setYear] = useState("");
  // const [isLaunchSuccess, setIsLaunchSuccess] = useState(true);
  // const [isLandingSuccess, setIsLandingSuccess] = useState(true);
  const classes = styles(props)
  const {years, boolOptions} = filterOptions
  const isActive=key=>{
    return "active"
  }
   return (
     <div className={classes.filterList}>
       Filters
       <div className={classes.filterListWrapper}>
         <div className={classes.filterListHeader}>Launch Year</div>
         <div className={classes.filterListContent}>
           {years &&
             years.map((year) => {
               return (
                 <div className="classes.yearButton">
                   <ColorButton
                     variant="contained"
                     color="primary"
                     key={year}
                     className={isActive(year)}
                     // onClick={() => showYear(data, setYear)}
                   >
                     {year}
                   </ColorButton>
                 </div>
               );
             })}
         </div>
       </div>
       <div className={classes.filterListWrapper}>
         <div className={classes.filterListHeader}>Successful Launch</div>
         <div className={classes.filterListContent}>
           {boolOptions &&
             boolOptions.map((option) => (
               <div className="classes.yearButton">
                 <ColorButton
                   variant="contained"
                   color="primary"
                   key={option}
                   className={isActive(option)}
                   // onClick={() => showYear(data, setYear)}
                 >
                   {option}
                 </ColorButton>
               </div>
             ))}
         </div>
       </div>
       <div className={classes.filterListWrapper}>
         <div className={classes.filterListHeader}>Successful Landing</div>
         <div className={classes.filterListContent}>
           {boolOptions &&
             boolOptions.map((option) => (
               <div className="classes.yearButton">
                 <ColorButton
                   variant="contained"
                   color="primary"
                   key={option}
                   className={isActive(option)}
                   // onClick={() => showYear(data, setYear)}
                 >
                   {option}
                 </ColorButton>
               </div>
             ))}
         </div>
       </div>
     </div>
   );
}export default Filter

