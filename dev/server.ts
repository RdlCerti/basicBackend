import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import setupRouter from "./util/router"

const app = express();

var corsOptions = { origin: "*" };

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.use("/", setupRouter());

// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
