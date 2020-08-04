import { makeStyles } from "@material-ui/styles";

export const styles = makeStyles({
  filterList:{
    backgroundColor: "rgb(253, 249, 244)",
    border: "1px solid #c2c3c4",
    borderRadius: "2px",
    width: "80%",
    padding: "30px",
    margin: "10px",
  },
  filterListWrapper:{
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  },
  filterListContent:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "200px",
    justifyContent: "space-between",
  },
  filterListHeader:{
    fontSize: "20px",
    backgroundColor: "#cad0d6",
  }
})