const express = require('express');
const router = express.Router();
const { findById, findByIdAndUpdate } = require('../models/Books.js');
const Books = require('../models/Books.js');

router.put('/update/:id',  async(req,res)=>{
    const {title, author, year, overview} = req.body;
    try {
        const newBook = {};
        if(title){newBook.title = title};
        if(author){newBook.author = author};
        if(year){newBook.year = year};
        if(author){newBook.overview = overview};

        let book = await Books.findById(req.params.id);
        if(!book){
            return res.status(404).send("Not Found");
        }
        book = await Books.findByIdAndUpdate(req.params.id, {$set: newBook}, {new:true});
        res.json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Interval Server Error")
    }
    
})



module.exports = router;