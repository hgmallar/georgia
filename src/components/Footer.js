import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#3C3B6E",
    // position: "fixed",
    // bottom: 0,
    width: "100%",
    height: "50px",
  },
  footerColor: {
    backgroundColor: "#3C3B6E",
    color: "#FFF",
    opacity: 1,
  },
});

export const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.footer}
    >
      <BottomNavigationAction
        className={classes.footerColor}
        label="Home"
        component={Link}
        to="/"
        value=""
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        className={classes.footerColor}
        label="About"
        component={Link}
        to="/about"
        value="about"
        icon={<InfoIcon />}
      />
      <BottomNavigationAction
        className={classes.footerColor}
        label="Contact"
        component={Link}
        to="/contact"
        value="contact"
        icon={<ContactSupportIcon />}
      />
    </BottomNavigation>
  );
};
export default Footer;
