const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log("In the middle ware")
    next();

});

app.use((req, res, next)=>{
    console.log("In another middle ware")
    res.send('<h1> hello to node js </h1>');

});

app.listen(4000);