var express = require('express');
var router = express.Router();
var destinationController = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationController.create);

module.exports = router;