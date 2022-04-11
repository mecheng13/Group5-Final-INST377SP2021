var express = require("express")
var app = express()
var router = express.Router()

router.use(function(req, res, next){
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
})

router.route("")
    .all(function(req, res, next){
        next()
    })

    .get(function(req,res, next){
        res.json(req.user)
    })
