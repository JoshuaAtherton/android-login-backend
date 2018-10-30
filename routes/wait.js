//express is the framework we're going to use to handle requests
const express = require('express');

//retrieve the router pobject from express 
var router = express.Router();

router.get("/", (req, res) => {
    setTimeout(() => {
        res.send({
            message: "Thanks for waiting"
        });
    }, 1000);
});

router.post("/", (req, res) => {
    setTimeout(() => {
        res.send({
            message: "Thanks for waiting"
        });
    }, 1000);
});

// "return" the router 
module.exports = router;