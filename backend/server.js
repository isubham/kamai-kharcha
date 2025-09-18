import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_DB_CONNECTION;

const server = express();

const PORT = 3000;

server.get("/health", function (req, res) {
  console.log("health request incoming");

  console.log("mongodb uri", MONGO_URI);

  res.send({ status: "pass" });
});

/////////////

server.post("/users", function (req, res) {
  // parse req body
  // validate input body via package joi
  // encrypt the password
  // save the details in mongoDB
  // return the 201 status code
  res.send({ status: "pass" });

  console.log(res);
});

////////

server.listen(PORT, () => {
  console.log("server started");
});
