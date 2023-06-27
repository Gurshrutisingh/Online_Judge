const mongoose = require("mongoose");
const express = require("express");

const ProbSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    statement:{
        type: String,
        required: true
    },
    input:{
        type: String,
        required: true
    },
    output:{
        type: String,
        required: true
    }
})

const ProbModel=mongoose.model("ProbModel",ProbSchema);
module.exports = ProbModel;