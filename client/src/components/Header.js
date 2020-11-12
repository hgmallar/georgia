import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    fontFamily: `'Oxygen', sans-serif`,
    textAlign: "center",
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export const Header = () => {
  const classes = useStyles();
  return <h1 className={classes.header}>How To Vote Georgia </h1>;
};
export default Header;
