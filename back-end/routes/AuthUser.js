const express=require("express");
const UserModel=require("../models/UserModel");
const mongoose=require("mongoose");
const dotenv = require("dotenv");
const jwt =require("jsonwebtoken");
const router=express.Router();
dotenv.config();
const createToken = (_id) =>{
  return jwt.sign({_id},process.env.SECRET,{ expiresIn: '3d'}); 
}
//login route
router.post("/login",async(req,res)=>{
    const {name,email,password}=req.body;
    
    try{
        const user= await UserModel.login(name,email,password);
        const token = createToken(user._id);
        res.status(200).json({email,token});
    }
    catch(error){
     res.status(400).json({error: error.message});
    }
})


//signin route
router.post("/signin",async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const user= await UserModel.signin(name,email,password);
        const token = createToken(user._id);
        res.status(200).json({email,token});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports=router;