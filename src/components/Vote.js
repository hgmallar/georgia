import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  buttons: {
    margin: theme.spacing(1),
    color: "#FFF",
    borderColor: "#FFF",
  },
  icons: {
    color: "#FFF",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  bold: {
    fontWeight: "bolder",
    color: "#FFF",
  },
}));

const Vote = () => {
  const classes = useStyles();

  return (
    <>
      <h2>Early Voting Begins: December 14th</h2>
      <h2>Early Voting Ends: December 31st</h2>
      <h2>Election Day: January 5th</h2>
      <Link
        href="https://www.mvp.sos.ga.gov/MVP/mvp.do"
        target="_blank"
        className={classes.link}
      >
        <Button
          variant="outlined"
          color="secondary"
          className={classes.buttons}
        >
          Find Your Polling Place
        </Button>
      </Link>
      <Link
        href="https://www.ridetothepoll.com/"
        target="_blank"
        className={classes.link}
      >
        <Button
          variant="outlined"
          color="secondary"
          className={classes.buttons}
        >
          Get A Ride To Polling Place
        </Button>
      </Link>
      <List className="left-align">
        <ListItem>
          <ListItemText>
            Polling places are open from 7am to 7pm on Election Day.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            Georgia election law requires voters to show one of the following
            six forms of photo identification in order to vote in person:
            <List className="left-align">
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  a Georgia driver’s license, even if expired;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  any valid state or federal government-issued photo ID,
                  including a FREE Voter ID card issued by your county
                  registrar’s office or the Department of Driver Services (DDS);
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>a valid U.S. passport;</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  a valid employee photo ID from any branch, department, agency,
                  or entity of the U.S. Government, Georgia, or any county,
                  municipality, board, authority, or other entity of this state;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>a valid U.S. military photo ID; or</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>a valid tribal photo ID.</ListItemText>
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            To obtain a FREE Voter Identification Card, you must provide all of
            the following any county registrar’s office or Department of Driver
            Services office:
            <List className="left-align">
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  a photo identity document or approved non-photo identity
                  document that includes full legal name and date of birth;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  documentation showing the voter’s date of birth;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  evidence that the applicant is a registered Georgia voter; and
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  documentation showing the applicant’s name and residential
                  address.
                </ListItemText>
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
      </List>
      <Link
        href="https://elections.sos.ga.gov/Elections/countyregistrars.do"
        target="_blank"
        className={classes.link}
      >
        <Button
          variant="outlined"
          color="secondary"
          className={classes.buttons}
        >
          Find County Board of Registrars Offices
        </Button>
      </Link>
      <Link
        href="https://dds.georgia.gov/locations/customer-service-center"
        target="_blank"
        className={classes.link}
      >
        <Button
          variant="outlined"
          color="secondary"
          className={classes.buttons}
        >
          Find Departments of Driver Services
        </Button>
      </Link>
    </>
  );
};

export default Vote;
