import React from "react";
import { styles } from "./styles/filterStyles";
import { Button, withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { useRouteMatch, useHistory } from "react-router-dom";
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
const filterOptions = {
  boolOptions: ["true", "false"],
  years: [
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
  ],
};

function Filter(props) {
  const classes = styles();
  const { years, boolOptions } = filterOptions;
  const match = useRouteMatch();
  const history = useHistory();
  const handleFilterYearCLick = (selected, type) => () => {
    const paramVal = { ...match.params };
    const uri = match.url.includes(`/launches/`) && `/launches/`;
    if (type === "year") {
      paramVal.year = selected;
    }
    if (type === "land") {
      paramVal.land = selected;
    }
    if (type === "luanch") {
      paramVal.luanch = selected;
    }
    const queryString = Object.values(paramVal);

    const matchUrl = uri + queryString.join("/");

    history.push(matchUrl);
  };
  const isActive = (key) => {
    if (match.params.year === key) {
      return "active";
    }
    return false;
  };
  return (
    <div className={classes.filterList}>
      Filters
      <div className={classes.filterListWrapper}>
        <div className={classes.filterListHeader}>Launch Year</div>
        <div className={classes.filterListContent}>
          {years &&
            years.map((year) => {
              return (
                <div key={year} className="classes.yearButton">
                  <ColorButton
                    variant="contained"
                    color="primary"
                    key={year}
                    className={isActive(year)}
                    onClick={handleFilterYearCLick(year, "year")}
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
              <div key={option} className="classes.yearButton">
                <ColorButton
                  variant="contained"
                  color="primary"
                  key={option}
                  className={match.params.luanch === option ? "active" : ""}
                  onClick={handleFilterYearCLick(option, "luanch")}
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
              <div key={option} className="classes.yearButton">
                <ColorButton
                  variant="contained"
                  color="primary"
                  key={option}
                  className={match.params.land === option ? "active" : ""}
                  onClick={handleFilterYearCLick(option, "land")}
                >
                  {option}
                </ColorButton>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default React.memo(Filter);
