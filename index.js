const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const allCourses = require("./Data/Courses.json");

app.get("/", (req, res) => {
    res.send("Now server is running");
});

app.get("/courses", (req, res) => {
    res.send(allCourses);
});

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const getSingleCourse = allCourses?.find((p) => p.id == id);
    if (!getSingleCourse) {
        res.send("Porduct khuje pai nai");
    }
    res.send(getSingleCourse);
});


app.listen(Port, () => {
    console.log("server is running", Port);
});