
const express = require('express');
const app = express();
// console.log(app);

let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

app.use((req, res) => {
    // console.log(req);
    console.log("request received");
    // res.send({
    //     name: "Apple",
    //     color: "Red",
    // });
    
    let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
    res.send(code);
});
