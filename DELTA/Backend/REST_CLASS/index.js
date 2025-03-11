const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "apnacollage",
        content: "I love coding"
    },
    {
        username: "kaushikmandal",
        content: "Hard work is important"
    },
    {
        username: "random",
        content: "I got seected with"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});