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

const Register = () => {
  const classes = useStyles();

  return (
    <>
      <h2>Registration Deadline: December 7th</h2>
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
          Check Registration
        </Button>
      </Link>
      <Link
        href="https://registertovote.sos.ga.gov/GAOLVR/welcometoga.do#no-back-button"
        target="_blank"
        className={classes.link}
      >
        <Button
          variant="outlined"
          color="secondary"
          className={classes.buttons}
        >
          Update Registration
        </Button>
      </Link>
      <Link
        href="https://registertovote.sos.ga.gov/GAOLVR/welcometoga.do#no-back-button"
        target="_blank"
        className={classes.link}
      >
        <Button
          variant="outlined"
          color="secondary"
          className={classes.buttons}
        >
          Register To Vote
        </Button>
      </Link>
      <List className="left-align">
        <ListItem>
          <ListItemIcon className={classes.icons}>
            <i className="fas fa-star"></i>
          </ListItemIcon>
          <ListItemText>
            If you are 17 years old and will be{" "}
            <span className={classes.bold}>
              18 years old on or before January 5th
            </span>
            , you can register to vote and vote in the upcoming election!
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.icons}>
            <i className="fas fa-star"></i>
          </ListItemIcon>
          <ListItemText>
            Reminder: you must{" "}
            <span className={classes.bold}>
              update your registration every time you move
            </span>
            !
          </ListItemText>
        </ListItem>
      </List>
      <List className="left-align">
        <ListItem>
          <ListItemText>
            To register to vote, you must:
            <List>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>be a citizen of the United States;</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>be a legal resident of the county;</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  be at least 17 1/2 years of age to register and 18 years of
                  age to vote;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  not be serving a sentence for conviction of a felony involving
                  moral turpitude; and
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  have not been found mentally incompetent by a judge.
                </ListItemText>
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            To register to vote in Georgia you should provide one of the
            following:
            <List>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  your Georgia driver's license number;
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>your Georgia ID number; or</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>other government issued photo ID.</ListItemText>
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            If you do not have these IDs, you may provide:
            <List>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  the last four digits of your Social Security Number.
                </ListItemText>
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            If you are registering to vote for the first time by mail, you will
            need to provide proof of residency. Acceptable proof includes:
            <List>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>current and valid photo ID;</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  utility bill, bank statement, government check, or paycheck
                  that shows your current name and address; or
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icons}>
                  <i className="fas fa-star"></i>
                </ListItemIcon>
                <ListItemText>
                  government issued document that shows your current name and
                  address.
                </ListItemText>
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default Register;
