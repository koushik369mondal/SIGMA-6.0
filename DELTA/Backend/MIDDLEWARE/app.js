const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Hi I am 1st middleware');
    next();
    console.log("This is after next");
});

app.use((req, res, next) => {
    console.log('Hi I am 2nd middleware');
    next();
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