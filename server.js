const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const routes = require("./routes");

//initialize express
const app = express();

const PORT = process.env.PORT || 3001;

//add middleware

//express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//bodyparser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//passport
app.use(passport.initialize());

//passport config
require("./config/passport") (passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

app.use(routes);

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
