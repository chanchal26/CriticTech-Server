const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const allCourses = require("./Data/Courses.json");

app.get("/", (req, res) => {
    res.send("Now server is running");
});