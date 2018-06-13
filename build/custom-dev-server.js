const express = require('express');
const config = require("../config");
const appIndexData = require("../api/index.json");

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const app = express();
const apiRoutes = express.Router();

apiRoutes.get('/index', function(req, res) {
  res.json({
    code: '10000',
    data: appIndexData,
    msg: 'ok'
  })
});

app.use('/api', apiRoutes);


const host = HOST || config.dev.host;
const port =  PORT + 1 || config.dev.port + 1;

console.log("> Starting Api Server...");

app.listen(port, () => {
  console.log('> Api Server Listening at ' + host + ':'+ port + '\n')
})
