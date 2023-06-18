
const express= require("express");
const bodyParser=require("body-parser");
const mongoose = require("mongoose");
const session =require("express-session");
const passport= require("passport");
const dotenv = require("dotenv");
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

//connect to data base
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MOGO_URL)
    .then(()=> console.log("DB Connected"))
    .catch((err)=>{
      console.log(err);
  })
}

app.get('/',function (req,res) {
    res.sendFile(__dirname+'\\src\\App.js');
})
app.listen(9000,function () {
    console.log("Server is connected");
})