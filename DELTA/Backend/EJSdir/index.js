const express = require('express');
const app = express();
const path = require('path');

let port = 8081;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.get("/", (req, res) => {
    // res.send("This is home page");
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("Hello");
});
app.listen(port, () => {
    console.log(`Listning on port ${port}...`);
});