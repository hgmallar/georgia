const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const port = process.env.PORT || 4444;
const path = require("path"); 

app.use(morgan("dev"));

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/sendtome", require("./routes/sendToMe"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});
