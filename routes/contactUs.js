const express = require('express');


const router = express.Router();

const Ctrl = require('../controllers/contactUsCtrl')

// /admin/add-product  => GET
router.get('/',Ctrl.contactUsCtrl);

module.exports = router;