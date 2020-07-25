const express = require('express');
const router = express.Router();
const productDetailsService = require('./productdetails.service');

// routes
router.post('/saveProductDetails', saveProductDetails);

module.exports = router;

function saveProductDetails(req, res, next) {
    console.log('*********');
    console.log(req.method);
    console.log(req.body);
    console.log('*********');
    productDetailsService.saveProductDetails(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}
