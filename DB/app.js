const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser=require("body-parser");
const session =require("express-session");
const passport= require("passport");
dotenv.config();
const app=express();
main().catch(err => console.log(err));

//body-parser
app.use(bodyParser.urlencoded({extended: true}));

//setting up session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

//initialize passport
app.use(passport.initialize());

//use passport to deal with session
app.use(passport.session());

async function main() {
  await mongoose.connect(process.env.MOGO_URL)
  .then(()=> console.log("DB Connected"))
  .catch((err)=>{
    console.log(err);
  })
}