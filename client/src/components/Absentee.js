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

const Absentee = () => {
  const classes = useStyles();

  return (
    <>
      <h2>
        Request Absentee Ballot: <span className={classes.bold}>NOW</span>
      </h2>
      <h2>First Day Absentee Ballots are Mailed by Regsitrar: November 18th</h2>
      <h2>Absentee Ballot Applications Must Be Submitted By: January 1st</h2>
      <h2>Absentee Ballots Must be Received By: January 5th</h2>
      <Link
        href="https://ballotrequest.sos.ga.gov/"
        target="_blank"
        className={classes.link}
      >
        <Button
          variant="outlined"
          color="secondary"
          className={classes.buttons}
        >
          Request An Absentee Ballot
        </Button>
      </Link>
      <List className="left-align">
        <ListItem>
          <ListItemIcon className={classes.icons}>
            <i className="fas fa-star"></i>
          </ListItemIcon>
          <ListItemText>
            <span className={classes.bold}>
              Any voter registered in Georgia can vote absentee by mail.
            </span>{" "}
            Complete the application as soon as possible and mail, fax, email
            (as an attachment), or drop the application off at your county
            registrar’s office.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.icons}>
            <i className="fas fa-star"></i>
          </ListItemIcon>
          <ListItemText>
            <span className={classes.bold}>
              You must file a separate application for each election for which
              you are requesting an absentee ballot
            </span>{" "}
            unless you are over 65, with disability, or are a military or
            overseas citizen.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.icons}>
            <i className="fas fa-star"></i>
          </ListItemIcon>
          <ListItemText>
            Absentee ballots may be requested any time between 180 days prior to
            the election and the end of the business day on the Friday before
            Election Day.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.icons}>
            <i className="fas fa-star"></i>
          </ListItemIcon>
          <ListItemText>
            Absentee ballots can be delivered either by U.S. first class mail or
            hand delivered by the voter to their county registrar’s office. If
            mailing, you must affix postage to the ballot envelope.
          </ListItemText>
        </ListItem>
      </List>
      <Link
        href="https://sos.ga.gov/admin/uploads/Absentee_Voting_Guide_20142.pdf"
        target="_blank"
        className={classes.link}
      >
        <Button
          variant="outlined"
          color="secondary"
          className={classes.buttons}
        >
          Georgia Absentee Voting Guide
        </Button>
      </Link>
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
        href="https://gaballotdropbox.org/"
        target="_blank"
        className={classes.link}
      >
        <Button
          variant="outlined"
          color="secondary"
          className={classes.buttons}
        >
          Find Ballot Dropboxes
        </Button>
      </Link>
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
          Track Your Ballot
        </Button>
      </Link>
    </>
  );
};

export default Absentee;
