const express =require("express").Router();
const User =require("../models/user.js")
router.post('/signin',async(req,res) =>{
   const {UseName,Email,Password}=req.body;
   if(!UseName || !Email || !Password)
   {
    return res.status(422).json({ error: "Please fill all fields" });
   }
   const newUser =new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
   })
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        console.log(savedUser);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});
router.post('/login',async(req,res) =>{
    const {UseName,Password}=req.body;
   if(!UseName  || !Password)
   {
    return res.status(422).json({ error: "Please fill all fields" });
   }
   const username=req.body.UseName;
  sec.findOne({UseName: username})
    .then((docs)=>{
      if (docs.password===req.body.Password) {
        //loged in
        return res.status(201).json({ message: "user is registered" });
      }
      else
      {
        return res.status(422).json({ error: "Password don't match" });
      }
    })
    .catch(()=>{
      res.render('<h2>Error</h2>');
    });
});