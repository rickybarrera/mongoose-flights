const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsController.newTicketView);
router.post('/flights/:id/tickets', ticketsController.addToFlight);

module.exports = router;