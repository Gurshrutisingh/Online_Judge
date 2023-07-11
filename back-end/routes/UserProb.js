const express = require("express");
const ProbModel = require("../models/ProbModel");
const TestModel = require("../models/TestModel");

const router=express.Router();
router.post("/add",async(req,res)=>{
    const {UserName,Statement,Input,Output,InputTest,OutputTest}=req.body;
    try{
        const userAll= await ProbModel.create({
         name:UserName,
         statement:Statement,
         input:Input,
         output: Output
        })
        const userTest= await TestModel.create({
            id: userAll._id,
            input:InputTest,
            output: OutputTest
        })
        res.status(201).json(userAll);
    }
    catch(error){
     res.status(400).json({error: error.message});
    }
})
module.exports=router;