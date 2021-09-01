const express = require('express');
const partnersRouter = express.Router();

partnersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Updating the partner: Will update the partner: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end('Deleting all partners');
});


partnersRouter.route('/:partnersId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of partner ${req.params.partnersId} to you.`);
})
.post((req, res) => {
    res.end(`POST operation not suported on partner ${req.params.partnersId}.`);
})
.put((req, res) => {
    res.statusCode = 200;
    res.end(`Will update partner: ${req.params.partnersId} with description: ${req.params.partnersId}`);
})
.delete((req, res) => {
    res.end(`Deleting partner ${req.params.partnersId}. `);
});

module.exports = partnersRouter;