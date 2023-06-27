const express=require("express");
const { generateFile } =require("../generateFile");
const { executeCpp } = require("../executeCpp");
const router=express.Router();


router.post("/code",async(req,res)=>{
    const {language,code}=req.body;
    try{
        if(code === undefined){
            res.status(404).json({error: "Empty Code!!"});
        }else{
        const fp = await generateFile(language,code);
        const op=await executeCpp(fp);
        res.status(200).json(op);
        }
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports=router;