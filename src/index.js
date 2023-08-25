const express = require("express");
require("dotenv").config(); // loads the environment variables into process.env
const path = require("path");
const cors = require("cors");

const deviceRouter = require("./routers/device");
const { handleError } = require("./utils/error");

// Configuring the database
const mongoose = require("mongoose");
const localUrl = "mongodb://localhost:27017/simple-device";

const app = express();

//Enable cors
app.use(cors());

app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Redirect the base URL / to /api/v1/device#
app.get("/", (req, res) => {
  res.redirect("/api/v1/device");
});

// Mongoose Connection
mongoose.Promise = global.Promise;
const { MONGO_URI } = process.env;
const URL = MONGO_URI || localUrl;

// Connecting to the database
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log(
      "Could not connect to the database but server is working" /*err*/
    );
    //process.exit();
  });

app.use("/api/v1/device", deviceRouter);

app.use(handleError);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
