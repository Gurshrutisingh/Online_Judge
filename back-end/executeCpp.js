const { exec } =require("child_process");
const fs=require("fs");
const path=require("path");

var dir = __dirname + '/outputs';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const executeCpp = async (filePath,testCases,type) =>{
    const jobId=path.basename(filePath);
    const outPath=path.join(dir,`${jobId}.exe`);
    const inp=path.join(dir,'/input.txt');
    if(type==="run"){
    await fs.writeFileSync(inp, testCases);
    }
    else{
        await fs.writeFileSync(inp, testCases.input);
    }
    console.log("hello");
        return new Promise((resolve,reject)=>{
            if(type==="run"){
            console.log("run");
                exec(
                  `g++ ${filePath} -o ${outPath} && cd ${dir} && .\\${jobId}.exe < ${inp}`,
                    (error, stdout, stderr) => {
                        if (error) {
                            reject({ error, stderr });
                        }
                        if (stderr) {
                            reject(stderr);
                        }
                        resolve(stdout);
                    }
                );
                }
            else{
                console.log("submit");
                exec(
                    `g++ ${filePath} -o ${outPath} && cd ${dir} && .\\${jobId}.exe < ${inp}`,
                      (error, stdout, stderr) => {
                          if (error) {
                              reject({ error, stderr });
                          }
                          if (stderr) {
                              reject(stderr);
                          }
                          resolve(stdout);
                      }
                  );
            }
    })
   
}

module.exports = {
    executeCpp,
};