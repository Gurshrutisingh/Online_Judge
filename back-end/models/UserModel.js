const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const validator=require("validator");
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
UserSchema.statics.signin = async function(name,email,password){

    if(!name||!email||!password)
    {
        throw Error('All fields must me filled');
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid');
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong');
    }
    const exists= await this.findOne({ email });
    if(exists)
    {
        throw Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const hash= await bcrypt.hash(password,salt);

    const user=await this.create({name,email,password: hash});
    return user;
}
UserSchema.statics.login = async function(name,email,password) {
    if(!name||!email||!password)
    {
        throw Error('All fields must me filled');
    }
    const ifExist= await this.findOne({ email });
    if(!ifExist)
    {
        throw Error('Email is wrong');
    }
    const match = await bcrypt.compare(password,ifExist.password);

    if(!match||!(name===ifExist.name)){
        throw Error('Incorrect Credintial');
    }
    return ifExist;
}
const UserModel=mongoose.model("UserModel",UserSchema);
module.exports = UserModel;