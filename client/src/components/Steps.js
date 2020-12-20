import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Absentee from "./Absentee";
import EarlyVote from "./EarlyVote";
import Vote from "./Vote";

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

const useStyles = makeStyles({
  root: {
    fontFamily: `'Oxygen', sans-serif`,
    flexGrow: 1,
    backgroundColor: "#3C3B6E",
    color: "#EEE",
    textAlign: "center",
  },
  tabs: {
    backgroundColor: "#B22234",
  },
  tab: {
    "&:hover": {
      opacity: 1,
    },
  },
});

export default function SimpleTabs() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`main ${classes.root}`}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="Vote By Mail" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Vote Early" {...a11yProps(1)} />
          <Tab
            className={classes.tab}
            label="Vote Election Day"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Absentee />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EarlyVote />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Vote />
      </TabPanel>
    </div>
  );
}
