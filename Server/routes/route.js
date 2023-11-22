const express = require('express');
const router = express.Router();
const Todo = require('../models/todoSchema');
const todoSchema = require('../models/todoSchema');

router.post('/', async (req,res) => {
    try{
        const { title }=req.body;
        const todo = new Todo({title});
        
        const newTodo =await todo.save();
        res.status(200).json(newTodo);       
    }catch(error){
        res.status(500).json({message : error.message})
    }
})

router.get('/', async (req,res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(error){
        res.status(500).json({message : error.message});
    }
    }
)


//get specific document based on ID
router.get('/:Id', async(req,res) => {
    try{
       const todo = await todo.findById(req.params.Id);
       if (todo === null){
        return res.status(404).json({message : "Item does not exist"})
       }
       return res.json(todo); 
    }catch(error){
        res.status(500).json({message : error.message});
    }
})


//delete item from database
router.delete('/:id', async (req,res) => {
    try{
        const { title } = req.body;
        const todo =await Todo.findByIdAndDelete(req.params.id);
        if (todo === null){
            return res.status(404).json({message : "Item does not exist"})
           }
           return res.json({message : "Items deleted successfully"});

           return res.status(200).json({message : error.message});
    }catch(error){
        res.status(500).json({message : error.message});
    }
})


router.patch('/:id', async (req,res) => {
    try{
        const { title } = req.body;
        const todo =await Todo.findByIdAndUpdate(req.params.id);

        todo.title= title;

       const updatedTodo = await todo.save();
       res.status(200).json(updatedTodo)
           
    }catch(error){
        res.status(500).json({message : error.message});
    }
})

module.exports = router;