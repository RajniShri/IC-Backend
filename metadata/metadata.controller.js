const express = require('express');
const router = express.Router();
const metadataService = require('./metadata.service');

// routes
router.get('/getmetadata', getmetadata);

module.exports = router;

function getmetadata(req, res, next) {
    metadataService.getMetadata()
    .then(metadata => res.json(metadata))
    .catch(err => next(err));
}
