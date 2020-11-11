import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
  about: {
    fontSize: "1.15em",
    paddingBottom: "50px",
  },
});

export const About = () => {
  const classes = useStyles();
  return (
    <List className={`left-align ${classes.about}`}>
      <ListItem>
        HowToVoteGeorgia.com was born out of a desire to help those eligible and
        eager to vote in the State of Georgia runoffs on January 5th, have the
        pertinent and up-to-date information they need to do so.
      </ListItem>
      <ListItem>
        Designed and developed by a poll worker from North Carolina, this
        non-partisan, independent website aims to help voters get clear, concise
        and up-to-date information on how to register to vote, where to vote
        and/or how to vote.
      </ListItem>
      <ListItem>
        The website will be updated as needed with any additional information
        for voters in the state of Georgia.
      </ListItem>
    </List>
  );
};

export default About;
