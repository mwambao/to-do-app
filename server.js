// import required modules Ref: npmjs.com
const express = require("express"); // Express framework for building webapps
const mongoose = require("mongoose"); //Mongoose for MongoDB modelling
const bodyParser = require("body-parser"); // middleware to parse form data
const Task = require("./models/Task") // Our Task model (schema)
