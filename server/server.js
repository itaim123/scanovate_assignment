const express = require('express');
const moment = require('moment');

const cors = require('cors');

const DATA = require('./data');

const app = express();
const port = 5000;
const allowedOrigins = ['http://localhost:3000'];

const options = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());
app.get('/', (req, res)=>{
    res.json(DATA)
})

app.listen(port, ()=>console.log('listening in 5000'))