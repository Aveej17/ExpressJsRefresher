const path = require('path');

const rootDir = require('../util/path');

exports.contactUsCtrl = (req, res, next)=>{
    // console.log("In the middle ware")
    res.sendFile(path.join(rootDir,  "views", "contactUs.html"));
}