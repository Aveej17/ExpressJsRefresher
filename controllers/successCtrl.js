const path = require('path');
const rootDir = require('../util/path');


exports.successCtrl= (req, res, next)=>{
    // console.log("In the middle ware")
    res.sendFile(path.join(rootDir,  "views", "success.html"));
}