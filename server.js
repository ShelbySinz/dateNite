const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Send every request to the React app
// Define any API routes before this runs

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dateNite");



app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
