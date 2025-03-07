
const express = require('express');
const app = express();
// console.log(app);

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})