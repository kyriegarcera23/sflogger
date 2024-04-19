const express = require('express');
const router = express.Router();

const {paymentCreate} = require('../controllers/payments');


router.post('/payments/create',paymentCreate)


module.exports=router;