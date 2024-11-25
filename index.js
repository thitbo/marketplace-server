

const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const authorRoute = require('./routes/author');
const listingRoute = require('./routes/listing');
require('dotenv').config();

app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use(morgan('common'));


//CONNECT TO DATABASE
// console.log('url', process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL)

app.get('/check', (req, res) => {
  res.json({ message: 'Hello Marketplace!' });
})

// app.use('/v1/author', authorRoute);
app.use('/mk/listing', listingRoute);



app.listen(8800, function(req, res) {
  console.log("Server is running at port 8000");
});