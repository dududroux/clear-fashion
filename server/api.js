const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const query = require("E:/clear-fashion/server/db/query")
const PORT = 8092;
var MongoClient = require('mongodb').MongoClient;
const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);

app.get('/products', async (req, response) => {
  var result = await query.FindProducts();
  //await query.Close();
  response.send(result);
});

app.get('/products/:_id', async (req, response) => {
  var result = await query.FindProducts_byID(req.params._id);
  //await query.Close();
  response.send(result);
});


app.get('/products/search', async (req, response) => {
  console.log(req.query);
});