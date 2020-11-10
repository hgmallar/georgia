import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    fontFamily: `'Oxygen', sans-serif`,
    textAlign: "center",
  },
});

export const Header = () => {
  const classes = useStyles();
  return <h1 className={classes.header}>How To Vote Georgia </h1>;
};
export default Header;
