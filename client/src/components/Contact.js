import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  contact: {
    paddingBottom: "50px",
    color: "#EEE",
  },
  form: {
    textAlign: "center",
  },
  dropdown: {
    marginBottom: "8px",
    margin: theme.spacing(1),
    width: "80%",
  },
  inputs: {
    margin: theme.spacing(1),
    width: "80%",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [nameErrorText, setNameErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [reason, setReason] = useState("OTHER");
  const [comments, setComments] = useState("");
  const [commentsErrorText, setCommentsErrorText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //destructure from inputs
    //do error checking
    if (
      !name.match(/^[a-z ,.'-]+$/i) ||
      !email.match(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ) ||
      !comments
    ) {
      //set error text
      if (!name.match(/^[a-z ,.'-]+$/i)) {
        setNameErrorText("Invalid name");
      } else {
        setNameErrorText("");
      }
      if (
        !email.match(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        )
      ) {
        setEmailErrorText("Invalid email");
      } else {
        setEmailErrorText("");
      }
      if (!comments) {
        setCommentsErrorText("Comments are required");
      } else {
        setCommentsErrorText("");
      }
    } else {
      axios.post("/sendtome", {
        //make an object to be handled from req.body on the backend.
        email,
        name,
        reason,
        //change the name to represent text on the backend.
        text: comments,
      });
      setName("");
      setEmail("");
      setReason("OTHER");
      setComments("");
      setNameErrorText("");
      setEmailErrorText("");
      setCommentsErrorText("");
    }
  };

  return (
    <div className={classes.contact}>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            className={classes.inputs}
            id="name"
            label="Name"
            variant="outlined"
            error={nameErrorText.length === 0 ? false : true}
            helperText={nameErrorText}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            className={classes.inputs}
            id="email"
            label="email"
            variant="outlined"
            error={emailErrorText.length === 0 ? false : true}
            helperText={emailErrorText}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <FormControl variant="outlined" className={classes.dropdown}>
            <InputLabel id="reason">Reason</InputLabel>
            <Select
              labelId="reason"
              id="reason"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
              }}
            >
              <MenuItem value={"ERROR"}>Error On Page</MenuItem>
              <MenuItem value={"QUESTION"}>I Still Have a Question</MenuItem>
              <MenuItem value={"HELP"}>I Still Need Help Voting</MenuItem>
              <MenuItem value={"OTHER"}>Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            className={classes.inputs}
            id="comments"
            label="Comments"
            multiline
            rows={8}
            variant="outlined"
            error={commentsErrorText.length === 0 ? false : true}
            helperText={commentsErrorText}
            value={comments}
            onChange={(e) => {
              setComments(e.target.value);
            }}
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
