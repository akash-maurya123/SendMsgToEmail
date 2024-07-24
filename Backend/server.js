const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/formData')
    .then(() => console.log('MongoDb Connented'))
    .catch(err => console.log(err));

app.use('/api/data', require('./routes/data'));

const PORT = process.env.PORT || 5000;
app.listen(PORT ,() => 
console.log(`server running port ${PORT}`));