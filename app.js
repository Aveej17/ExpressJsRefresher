const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactUs');
const successRoutes = require('./routes/Success');

const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,'public')));

app.use("/admin", adminRoutes);
app.use("/contact-us", contactUsRoutes);
app.use("/success", successRoutes);
app.use(shopRoutes);

// default takes '/' path
app.use((req, res, next)=>{
    // console.log("In the middle ware");
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-notFound.html'));
});

app.listen(4000);