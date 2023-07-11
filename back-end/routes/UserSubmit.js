const express = require("express");
const mongoose=require("mongoose");
const SubmissionsModel = require("../models/SubmissionModel");


const router=express.Router();
router.get("/submissions/:prob/",async function (req,res) {
    const { prob }=req.params;
    try {
        const allUsers = await SubmissionsModel.find({id: prob});
        res.status(200).json(allUsers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
  
module.exports=router;