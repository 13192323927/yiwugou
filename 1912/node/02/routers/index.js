const  express = require('express');


const usersRouter = require('./users');
const goodsRouter = require('./goods');



const  Router = express.Router();


Router.use('/users',usersRouter);
Router.use('/goods',goodsRouter);


module.exports = Router;







