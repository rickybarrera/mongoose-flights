const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
const mongoose = require('mongoose');
const { save } = require('debug/src/browser');


module.exports = {
    addToFlight,
    newTicketView
};

function addToFlight(req, res) {
    let ticket = new Ticket(req.body)
    ticket.flight = mongoose.Types.ObjectId(req.params.id)
    ticket.save(function(err, saved) {
        console.log(saved);
        res.redirect('/flights/' + req.params.id);
    })
}

function newTicketView(req, res) {
    const flight = {id: req.params.id}
    res.render('tickets/new', {flight});
}