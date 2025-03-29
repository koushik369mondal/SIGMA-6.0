const express = require('express');
const app = express();

app.use((req, res) => {
    let {query} = req.query;
    console.log('Query:', query);
    console.log('Hi I am middleware');
    res.send("Middleware finished");
});

app.get('/', (req, res) => {
    res.send('Hi I am root');
});

app.get("/random", (req, res) => {
    res.send('Random Number:'+ Math.random());
});

app.listen(8080, () => {
    console.log('Server is running on PORT 8080');
});