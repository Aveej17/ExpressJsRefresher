const express = require('express');


const router = express.Router();

const Ctrl = require('../controllers/successCtrl');

// /admin/add-product  => GET
router.post('/', Ctrl.successCtrl);

module.exports = router;