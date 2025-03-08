const express = require('express');
const app = express();
// console.log(app);

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send("Hello I am root");
});

app.get('/:username/:id', (req, res) => {
    // console.log(req.params);
    let {username, id } = req.params;
    let htmlString = `<h1>Welcome ${username} with id ${id} to the root path!</h1>`;
    res.send(htmlString);
    // res.send(`Welcome ${username} with id ${id} to the root path!`);
});


// app.get('/apple', (req, res) => {
//     res.send("you contacted to apple path");
// });

// app.get('/orange', (req, res) => {
//     res.send("you contacted to orange path");
// });

// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a POST request to root path");
// });

// app.use((req, res) => {
    // console.log(req);
    // console.log("request received");
    // res.send({
    //     name: "Apple",
    //     color: "Red",
    // });
    
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//     res.send(code);
// });
