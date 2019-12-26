const express = require('express');

const app = express();

const CallRouter = require('./router/index');

app.use(express.static('./'));

app.use('./', CallRouter);

app.listen(1912, () => {
    console.log('服务开启成功')
})