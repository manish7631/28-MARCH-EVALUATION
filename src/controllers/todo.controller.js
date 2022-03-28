const express = require("express");

const Todo =  require("../models/todo.models");
 

 

 
 

const router = express.Router();

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find().lean().exec();

    return res.status(200).send(todos);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/todos",  async (req, res) => {
    

  try {
 const todos = await Todo.create(req.body);
   
    return res.status(200).send(todos);
    
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.get("/todos/:id", async (req, res) => {
    try {
      const todos = await Todo.findById(req.params.id).lean().exec();
  
      return res.status(200).send(todos);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
 

  router.patch("/todos/:id", async (req, res) => {
    try {
      const todos = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
      }).lean().exec();
  
      return res.status(200).send(todos);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.delete("/todos/:id", async (req, res) => {
    try {
      const todos = await Todo.findByIdAndDelete(req.params.id) 
  
      return res.status(200).send(todos);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
 

module.exports = router;
