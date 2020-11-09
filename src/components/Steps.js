import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#3C3B6E",
  },
  tabs: {
    backgroundColor: "#B22234",
  },
  buttons: {
    margin: theme.spacing(1),
    color: "#FFF",
    borderColor: "#FFF",
  },
  icons: {
    color: "#FFF",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
          className={classes.tabs}
        >
          <Tab label="Registration" {...a11yProps(0)} />
          <Tab label="Vote By Mail" {...a11yProps(1)} />
          <Tab label="Vote In Person" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <>
          <h2>Registration Deadline: December 7th</h2>
          <Link href="https://www.mvp.sos.ga.gov/MVP/mvp.do" target="_blank">
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
                If you are 17 years old and will be 18 on or before January 5th,
                you can register to vote and vote in the upcoming election!
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icons}>
                <i className="fas fa-star"></i>
              </ListItemIcon>
              <ListItemText>
                Reminder: you must update your registration every time you move!
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
                    <ListItemText>
                      be a citizen of the United States;
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.icons}>
                      <i className="fas fa-star"></i>
                    </ListItemIcon>
                    <ListItemText>
                      be a legal resident of the county;
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.icons}>
                      <i className="fas fa-star"></i>
                    </ListItemIcon>
                    <ListItemText>
                      be at least 17 1/2 years of age to register and 18 years
                      of age to vote;
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.icons}>
                      <i className="fas fa-star"></i>
                    </ListItemIcon>
                    <ListItemText>
                      not be serving a sentence for conviction of a felony
                      involving moral turpitude; and
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
                    <ListItemText>
                      other government issued photo ID.
                    </ListItemText>
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
                If you are registering to vote for the first time by mail, you
                will need to provide proof of residency. Acceptable proof
                includes:
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
                      utility bill, bank statement, government check, or
                      paycheck that shows your current name and address; or
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.icons}>
                      <i className="fas fa-star"></i>
                    </ListItemIcon>
                    <ListItemText>
                      government issued document that shows your current name
                      and address.
                    </ListItemText>
                  </ListItem>
                </List>
              </ListItemText>
            </ListItem>
          </List>
        </>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>Request Absentee Ballot: NOW</h2>
        <h2>
          First Day Absentee Ballots are Mailed by Regsitrar: November 18th
        </h2>
        <h2>Absentee Ballot Applications Must Be Submitted By: January 1st</h2>
        <h2>Absentee Ballots Must be Received By: January 5th</h2>
        <Link href="https://ballotrequest.sos.ga.gov/" target="_blank">
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
              Any voter registered in Georgia can vote absentee by mail. Just
              complete the application as soon as possible and mail, fax, email
              (as an attachment), or drop the application off at your county
              registrar’s office.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.icons}>
              <i className="fas fa-star"></i>
            </ListItemIcon>
            <ListItemText>
              You must file a separate application for each election for which
              you are requesting an absentee ballot unless you are over 65, with
              disability, or are a military or overseas citizen.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.icons}>
              <i className="fas fa-star"></i>
            </ListItemIcon>
            <ListItemText>
              Absentee ballots may be requested any time between 180 days prior
              to the election and the end of the business day on the Friday
              before Election Day.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.icons}>
              <i className="fas fa-star"></i>
            </ListItemIcon>
            <ListItemText>
              Absentee ballots can be delivered either by U.S. first class mail
              or hand delivered by the voter to their county registrar’s office.
              If mailing, you must affix postage to the ballot envelope.
            </ListItemText>
          </ListItem>
        </List>
        <Link
          href="https://sos.ga.gov/admin/uploads/Absentee_Voting_Guide_20142.pdf"
          target="_blank"
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
        >
          <Button
            variant="outlined"
            color="secondary"
            className={classes.buttons}
          >
            Find County Board of Registrars Offices
          </Button>
        </Link>
        <Link href="https://gaballotdropbox.org/" target="_blank">
          <Button
            variant="outlined"
            color="secondary"
            className={classes.buttons}
          >
            Find Ballot Dropboxes
          </Button>
        </Link>
        <Link href="https://www.mvp.sos.ga.gov/MVP/mvp.do" target="_blank">
          <Button
            variant="outlined"
            color="secondary"
            className={classes.buttons}
          >
            Track Your Ballot
          </Button>
        </Link>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Early Voting Begins: December 14th</h2>
        <h2>Early Voting Ends: December 31st</h2>
        <h2>Election Day: January 5th</h2>
        <Link href="https://www.mvp.sos.ga.gov/MVP/mvp.do" target="_blank">
          <Button
            variant="outlined"
            color="secondary"
            className={classes.buttons}
          >
            Find Your Polling Place
          </Button>
        </Link>
        <Link href="https://www.ridetothepoll.com/" target="_blank">
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
                    registrar’s office or the Department of Driver Services
                    (DDS);
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
                    a valid employee photo ID from any branch, department,
                    agency, or entity of the U.S. Government, Georgia, or any
                    county, municipality, board, authority, or other entity of
                    this state;
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.icons}>
                    <i className="fas fa-star"></i>
                  </ListItemIcon>
                  <ListItemText>
                    a valid U.S. military photo ID; or
                  </ListItemText>
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
              To obtain a FREE Voter Identification Card, you must provide all
              of the following any county registrar’s office or Department of
              Driver Services office:
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
                    evidence that the applicant is a registered Georgia voter;
                    and
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
        >
          <Button
            variant="outlined"
            color="secondary"
            className={classes.buttons}
          >
            Find Departments of Driver Services
          </Button>
        </Link>
      </TabPanel>
    </div>
  );
}
