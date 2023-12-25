const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second


let count = 0;
let numberOfRequestsForUser = {};

setInterval(() => {
    numberOfRequestsForUser = {};
    count = 0
}, 1000)

function rateLimit(req, res, next){
    let name = req.headers['user-id']
    numberOfRequestsForUser[name] = ++count;
    if(numberOfRequestsForUser[name] > 5){
        return res.status(404).json({error: "rate limit exceeded"})
    }
    next();
}

app.use(rateLimit)

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});


// app.listen(3000, ()=>{
// console.log("3000")
// })


module.exports = app;
