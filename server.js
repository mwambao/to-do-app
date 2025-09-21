// import required modules Ref: npmjs.com
const express = require("express"); // Express framework for building webapps
const mongoose = require("mongoose"); //Mongoose for MongoDB modelling
const bodyParser = require("body-parser"); // middleware to parse form data
const Task = require("./models/Task") // Our Task model (schema)

//Initialize Express app
const app = express();
const PORT = 3000; // server will run on http://localhost:3000

//middleware setup
app.use(bodyParser.urlencoded({ extended: true})); // parse URL-encoded bodies (from forms)
app.use(express.static("public")); // serve static files from 'pUblic' folder (HRML, CSS, JS)

//connect to MongoDB (make sure MongoDB is installed and is running locally on port 27017)
mongoose.connect("mongodb://localhost:27017/todoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Add a new task
app.post("/add", async(req, res) => {
    const newTask = new Task({ name: req.body.task }) //create a new task from form input
    await newTask.save(); //Save it to MongoDB
    res.redirect("/"); // Redirect back to homepage
})

app.listen(PORT, () => console.log(`Server runing at http://localhost:${PORT}`));




