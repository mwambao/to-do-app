// import module mongoose 
const mongoose = require("mongoose");

// Define a schema (structure of our "Task" document in MongoDB)
const taskSchema = new mongoose.Schema({name: String,}); // Each task will only have a "name" string

//Export Task Model so that we can use it server.js
module.exports = mongoose.model("Task", taskSchema); 