const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser=require("body-parser");
const session =require("express-session");
const passport= require("passport");
const UserModel=require("./models/UserModel");
const UserRoutes = require("./routes/UserRoutes");
const AuthUser=require("./routes/AuthUser");
const cors= require("cors");
const ProbModel = require("./models/ProbModel");

dotenv.config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
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
async function manually() {
  try{
    const userAll= await ProbModel.create({
     name:"Non Repeating Character",
     statement:"Given a string S consisting of lowercase Latin Letters. Return the first non-repeating character in S. If there is no non-repeating character, return '$'. ",
     input:"zxvczbtxyzvy",
     output: "c"
    })
    userAll.save();
  }
 catch(error){
  console.log(error);
 }
}
async function main() {
  await mongoose.connect(process.env.MOGO_URL)
  .then(()=> 
  app.listen(process.env.PORT,function () {
    console.log("server and DB are working");
    //manually()
  })
  )
  .catch((err)=>{
    console.log(err);
  })
}

app.use(UserRoutes);
app.use(AuthUser);