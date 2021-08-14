const express = require('express');
const entity_insert = require('../service/entity');
const login = require('../service/login');
const signup = require('../service/signup');
const auth = require('./auth');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get("/", auth,(req, res) => {
    res.send("Hello Gaurav")
})

router.post("/signup",signup);

router.post("/login",login);

router.post("/entity_insert",entity_insert);

module.exports = router;