const express = require('express');
const app = express();



app.get('/',(req,res) => {
    res.send("Welcome to Level 2");
});

app.listen(3000);