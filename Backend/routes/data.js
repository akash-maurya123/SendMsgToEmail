const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.post('/', async (req,res) => {
    try{ 
        const {name, number, email} = req.body;

        const existData = await Data.findOne({email})
        if(existData) {
            return res.status(400).json({error: 'email already'});
        }
        const newData = new Data({name, number, email });
        await newData.save();
        res.json(newData);
    } catch(err) {
        res.status(500).json({error: 'server error'})
    }
});

const nfm= {
    name : 'akash',
    number: 7753957934,
    email: 'andkmz'
}

console.log(nfm);


router.get('/' ,(req,res) => {
    Data.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json({
        error:  'Unable to fetch data'
    }))
});

module.exports = router;