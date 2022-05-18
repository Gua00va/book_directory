const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Books = require('../models/Books.js')

router.post('/add',[
    body('title', 'Title musy be atleast 5 characters').isLength({ min: 5 }),
    body('author', 'Author name must be atleast 5 characters').isLength({ min: 5 }),
] ,async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    } 
    try {
        let book = await Books.findOne({title: req.body.title});
        if(book){
            return res.status(400).json({error: 'Book already exists'});
        }
        book = await Books.create({
            title: req.body.title, 
            author: req.body.author,
            year: req.body.year,
            overview: req.body.overview
        });
        res.json(book);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Interval Server Error")
    }
}) 



module.exports = router;