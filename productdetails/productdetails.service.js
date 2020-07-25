const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const productdetails = db.productdetails;

module.exports = {
    saveProductDetails
};

async function saveProductDetails(params) {
    var small = new productdetails(params);
    return await small.save(function(err){
        console.log(err);
    });
}
