const express = require('express');
const app = express();
const path = require('path'); //set path to run from backend

let port = 8081;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views")); //set this to access from backend

app.get("/", (req, res) => {
    // res.send("This is home page");
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    let {username } = req.params;
    // console.log(`Hello, ${username}!`);
    res.render("instagram.ejs", {username});
})

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.get("/rolldice", (req, res) => {
    // res.render("rolldice.ejs");
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal});
});

app.listen(port, () => {
    console.log(`Listning on port ${port}...`);
});
