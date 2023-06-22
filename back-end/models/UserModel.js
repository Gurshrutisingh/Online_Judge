const mongoose = require("mongoose");
const express = require("express");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const UserModel=mongoose.model("UserModel",UserSchema);
module.exports = UserModel;