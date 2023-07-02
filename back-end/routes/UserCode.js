const express=require("express");
const { generateFile } =require("../generateFile");
const { executeCpp } = require("../executeCpp");
const TestModel = require("../models/TestModel");
const { FilesManager }=require('turbodepot-node');
const fs=require("fs");
const path=require("path");
const router=express.Router();
var dir = "C:\\Users\\HP\\OneDrive\\Desktop\\Online_Judge\\back-end\\outputs";
async function asyncCall(id){
    console.log(id);
    try{
      const allProb=await TestModel.findOne({id: id});
      //console.log(allProb.input);
     return (allProb);
    }
    catch(error){
      return ({error:error.message});
    }
  }

router.post("/code",async(req,res)=>{
    const {language,code,input,type}=req.body;
    let output;
    let filesManager = new FilesManager();

    try{
        if(code === undefined){
            res.status(404).json({error: "Empty Code!!"});
        }else{
        const fp = await generateFile(language,code);
        if(type==="run"){
            output=await executeCpp(fp,input,type);
            console.log(dir);
        }
        else{
             const testi=await asyncCall(input);
            output=await executeCpp(fp,testi,type);
            const inp1=path.join(dir,'/out1');
            await fs.writeFileSync(inp1, testi.output);
            const inp2=path.join(dir,'/out2');
            await fs.writeFileSync(inp2, output);
            console.log(filesManager.isFileEqualTo(inp1, inp2));
            var tmpBuf = fs.readFileSync(inp1, 'utf-8') ;
            var testBuf = fs.readFileSync(inp2, 'utf-8') ;
            console.log(tmpBuf == testBuf);
        }
        res.status(200).json(output);
        }
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports=router;