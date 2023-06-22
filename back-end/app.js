const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser=require("body-parser");
const session =require("express-session");
const passport= require("passport");
const UserModel=require("./models/UserModel");
const UserRoutes = require("./routes/UserRoutes");
const cors= require("cors");

dotenv.config();
const app=express();
app.use(express.json());
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

async function main() {
  await mongoose.connect(process.env.MOGO_URL)
  .then(()=> 
  app.listen(process.env.PORT,function () {
    console.log("server and DB are working");
  })
  )
  .catch((err)=>{
    console.log(err);
  })
}
app.use(UserRoutes);