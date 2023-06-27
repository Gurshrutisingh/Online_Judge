const express = require("express");
const UserModel=require("../models/UserModel");
const mongoose=require("mongoose");
const ProbModel = require("../models/ProbModel");

const router=express.Router();

router.post("/",async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const userAll= await UserModel.create({
         name:name,
         email:email,
         password:password
        })
        res.status(201).json(userAll);
    }
    catch(error){
     res.status(400).json({error: error.message});
    }
 })
 router.get("/",async(req,res)=>{
   try{
     const allProb=await ProbModel.find();
     res.status(201).json(allProb);
   }
   catch(error){
     res.status(400).json({error:error.message});
   }
 })
 router.get("/:id/",async(req,res)=>{
   const { id }=req.params;
   try{
     const found=await UserModel.findById({_id:id});
     res.status(201).json(found);
   }
   catch(error){
     res.status(400).json({error: error.message});
   }
 })
 module.exports=router;