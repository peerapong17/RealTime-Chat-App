import { makeStyles } from "@material-ui/core";

export const styles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    alignSelf: "flex-end",
    marginBottom: "13px",
  },
  name: {
    padding: "0px 7px",
    fontSize: "15px",
    textAlign: "end",
    marginBottom: "3px",
    color: "#585858",
  },
  message: {
    padding: "7px",
    width: "auto",
    alignSelf: "flex-end",
    backgroundColor: "pink",
    borderRadius: "7px 7px 0px 7px",
    boxShadow: "1px 1px 1px #d2d2d2",
  },
});
