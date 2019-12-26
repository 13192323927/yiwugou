const  express = require('express');
const  app = express();
const  callRouter = require('./routers/index')


app.use(express.static('./'));


app.use(callRouter);


app.listen(1912,()=>{
    console.log('成功')
})