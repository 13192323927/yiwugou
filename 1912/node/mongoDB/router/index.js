const express = require('express');

const Router = express.Router();

const userRouter  = require('./user');

const goodsRouter = require('./goods');



Router.use('/user',userRouter);
Router.use('/goods',goodsRouter);



module.exports  = Router;