const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    number:{
        type: Number,
        require:true
    },
    email:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model('Data', DataSchema);