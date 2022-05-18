const express = require('express');
const { findById } = require('../models/Books.js');
const router = express.Router();
const Books = require('../models/Books.js')


router.get('/view/:id', async(req,res)=>{
    try {
        const book = await Books.findById(req.params.id);
        if(!book){
            return res.status(404).send('Not Found');
        }
        res.json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Interval Server Error");
    }
})

module.exports = router;