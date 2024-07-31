const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

// /admin/add-product  => GET
router.get('/',(req, res, next)=>{
    // console.log("In the middle ware")
    res.sendFile(path.join(rootDir,  "views", "contactUs.html"));
});

module.exports = router;