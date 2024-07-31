const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req, res, next)=>{
    // console.log("This always runs");
    next();    
});

app.use('/add-product',(req, res, next)=>{
    // console.log("In the middle ware")
    res.send("<form action='/product' method='POST'><input type='text' name= 'title' ><input type='number' name= 'quantity' > <button type='submit'>Submit</button></form>");
});


app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
    
});


app.use('/',(req, res, next)=>{
    // console.log("In the middle ware")
    res.send('<h1> hello from node js </h1>');

});

app.listen(4000);