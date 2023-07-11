const mongoose = require("mongoose");
const express = require("express");

const SubmissionsSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    verdict:{
        type: String,
        required: true
    },
})

const SubmissionsModel=mongoose.model("SubmissionsModel",SubmissionsSchema);
module.exports = SubmissionsModel;