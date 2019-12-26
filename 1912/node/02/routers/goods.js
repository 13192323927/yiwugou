const express = require('express');

const Router = express.Router();
const bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false });

Router.post('/',urlencodedParser,(req,res) =>{
    console.log(req.body)  
    res.send()
})
Router.get('/',(req,res)=>{
    console.log(req.query)
    res.send()
})
module.exports = Router;