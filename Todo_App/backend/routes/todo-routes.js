const mongoose = require('mongoose')
const Todo = require('../models/todoModel')
const express = require('express')
const router = express.Router()

//for making todo task
router.post('/new', async (req , res)=>{
    const task = req.body.task
    const date = ""
    try {
        const newTask = new Todo({task,date})
        const result = await newTask.save()
        
       const newData = await Todo.find()


    //    message: 'Task saved',
    //    data : result,
    //    newTask : newData
       return res.status(201).json({
           myData : newData.reverse()
        })
        
    } catch (error) {
      return  res.status(404).json({
            message : error.message
        })
    }

})

// for getting all saved tasks
router.get('/all', async (req, res)=>{
    try {
        const tasks = await Todo.find()
         res.status(200).json({
            data : tasks.reverse()
        })
    } catch (error) {
        return  res.status(404).json({
            message:error.message
        })
    }
})

router.delete('/delete/:id', async(req , res)=>{
    const {id} = req.params;
   try {
    const result = await Todo.deleteOne({_id:id})
    const newData = await Todo.find()

  return res.status(200).json({
       deletedData : result,
       task : newData.reverse()
   })
   } catch (error) {
    console.log(error)
   } 
})

router.put('/edit/:id',async(req , res)=>{
    const {id} = req.params;
    const {task} = req.body;
    try {
        const updatedTask = await Todo.findByIdAndUpdate({_id:id},{$set:{ task:task}},{ new: true })
        return res.status(200).json({
            data : updatedTask,
            message: "task updated successfully"
        })
    } catch (error) {
        return res.status(401).json({
            error: error.message
        })
    }
})



module.exports = router
