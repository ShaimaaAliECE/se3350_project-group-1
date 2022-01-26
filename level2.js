const express = require('express');
const app = express();

const numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 20));

app.get('/',(req,res) => {
    res.send('<h1>Welcome to Level 2</h1> '
    + numbers);
});

app.listen(3000);