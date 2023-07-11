const express = require("express");
const { generateFile } = require("../generateFile");
const { executeCpp } = require("../executeCpp");
const TestModel = require("../models/TestModel");
const SubmissionModel = require("../models/SubmissionModel");
const { FilesManager } = require("turbodepot-node");
const fs = require("fs");
const path = require("path");
var md5 = require("md5");
const { error } = require("console");
const { inflateSync } = require("zlib");


const router = express.Router();
var dir = "C:\\Users\\HP\\OneDrive\\Desktop\\Online_Judge\\back-end\\outputs";
let coder;
async function asyncCall(id) {
  console.log(id);
  try {
    const allProb = await TestModel.find({ id: id });
    //console.log(allProb.input);
    return allProb;
  } catch (error) {
    return { error: error.message };
  }
}
async function checkTestCases(testi, fp, input) {
    try {
      let results = await Promise.all(testi.map(async (i) => {
        //console.log(i);
         output = await executeCpp(fp, i, "Submit");
        //console.log(output);
        let inp1 = path.join(dir, '/out1');
         fs.writeFileSync(inp1, i.output);
        let inp2 = path.join(dir, '/out2');
        //console.log(output);
         fs.writeFileSync(inp2, output);
        let tmpBuf = fs.readFileSync(inp1);
        let testBuf = fs.readFileSync(inp2);
        //console.log(md5(tmpBuf));
        //console.log(md5(testBuf));
        if (md5(tmpBuf) == md5(testBuf)) {
          const userAll= await SubmissionModel.create({
            id: input,
            name: coder,
            verdict: "Correct",
           })
           console.log(userAll);
          return "Success";
        } else {
          const userAll= await SubmissionModel.create({
            id: input,
            name: coder,
            verdict: "Wrong",
           })
           console.log(userAll);
          return "Failed";
        }
      }));
      //console.log(results);
      return results;
    } catch (error) {
      throw error;
    }
  }
router.post("/code", async (req, res) => {
  const { language, code, input, type, user } = req.body;
  let output;
  coder=user;
  try {
    if (code === undefined) {
      res.status(404).json({ error: "Empty Code!!" });
    } else {
      const fp = await generateFile(language, code);
      if (type === "run") {
        output = await executeCpp(fp, input, type);
        //console.log(output);
        res.status(200).json(output);
      } else {
        const testi = await asyncCall(input);
        checkTestCases(testi, fp, input)
          .then(async(resl) => {
            console.log(resl);
            if (resl == "Success") {
              res.status(200).json("Success");
            } else if (resl == "Failed") {
              res.status(200).json("Failed");
            }
            
          })
          .catch((error) => {
            res.status(200).json("Check for error");
          });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
