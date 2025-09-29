const express = require("express");
const {join} = require("path");
const app = express();

const morgan = require("morgan");
const {createWriteStream} = require("fs");
 
const logFile = join(__dirname, "blogchefNew.log");   // create the log file in the current project directory
 
/*--------------Morgan module ------------------*/
app.use(morgan(":method - :url - :date - :response-time ms"));  // morgan template
app.use(
  morgan(":method -:url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);
/*--------------Morgan module ------------------*/
app.use(morgan(":method - :url - :date - :response-time ms"));  // morgan template
app.use(
  morgan(":method -:url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);


app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app
  .get("/admin/register", (req, res) => res.render("register"))

app.get("/admin/welcome", (req, res) => {
  res.render("welcome");
});


app.listen(3001, () => console.log("Blog Chef is cooking on port 3001"));
