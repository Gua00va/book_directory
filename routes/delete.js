const express = require('express');
const router = express.Router();
const { findById, findByIdAndUpdate } = require('../models/Books.js');
const Books = require('../models/Books.js');

router.delete('/delete/:id',  async(req,res)=>{
    try {
        let book = await Books.findById(req.params.id);
    if(!book){
        return res.status(404).send("Not Found");
    }
    book = await Books.findByIdAndDelete(req.params.id);
    res.json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Interval Server Error")
    }
})


module.exports = router;