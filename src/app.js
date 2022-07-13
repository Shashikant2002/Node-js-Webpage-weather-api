const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
});

app.get('/about', (req, res) => {
    res.send("Welcome to About Page");
});

app.get('/weather', (req, res) => {
    res.send("Welcome to weather Page");
});

app.get('*', (req, res) => {
    res.send("Welcome to 404 Page");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

