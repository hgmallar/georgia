import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  contact: {
    paddingBottom: "50px",
  },
});

export const Contact = () => {
  const classes = useStyles();
  return <div className={classes.contact}></div>;
};

export default Contact;
