const express = require('express');
const allEntity = require('../service/allEntity');
const insertEntity = require('../service/InsertEntity');
const login = require('../service/login');
const queryEntity = require('../service/queryEntity');
const signup = require('../service/signup');
const auth = require('./auth');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get("/",(req, res) => {
    res.send("Hello Gaurav")
})

router.post("/signup",signup);

router.post("/login",login);

router.post("/insertEntity",insertEntity);

router.post("/queryEntity",queryEntity);

router.post("/allEntity",allEntity);

module.exports = router;