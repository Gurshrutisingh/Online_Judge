const fs=require("fs");
const path=require("path");
const { v4: uuidv4 } = require('uuid');

var dir = __dirname + '/codes';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const generateFile =async (format,code)=>{

  const uuidFile= uuidv4();
  const fileName= `${uuidFile}.${format}`;
  const filePath= path.join(dir,fileName);
  console.log(filePath);
  await fs.writeFileSync(filePath,code);
  return filePath;
}

module.exports ={
     generateFile
}