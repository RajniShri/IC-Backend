const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const metadata = db.metadata;

module.exports = {
    getMetadata
};

async function getMetadata() {
    return await metadata.find({});
}
