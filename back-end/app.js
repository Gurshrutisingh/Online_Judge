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
const TestModel =require("./models/TestModel");
const UserCode= require("./routes/UserCode");
const UserProb=require("./routes/UserProb");
const UserSubmit=require("./routes/UserSubmit");
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
    const userAll= await TestModel.create({
     id:"6499bacac8ad8a41be7a479a",
     //input:"4\n9\n1 2 7 -4 3 2 -10 9 1\n6\n10 20 -30 40 -50 60\n10\n18 -6 -6 -5 7 10 16 -6 -2 0\n15\n-7 -8 -16 -4 -8 -5 -7 -11 -10 -12 -4 -6 -4 -16 -10 ",
     input:"3\ngeeksforgeeks\nalgorithm\nzxvczbtxyzvy",
     output: 'f a c '
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
app.use(UserCode);
app.use(UserProb);
app.use(UserSubmit);