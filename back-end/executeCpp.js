const { exec } =require("child_process");
const fs=require("fs");
const path=require("path");

var dir = __dirname + '/outputs';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const executeCpp = (filePath) =>{
    const jobId=path.basename(filePath);
    const outPath=path.join(dir,`${jobId}.exe`);
    return new Promise((resolve,reject)=>{
        exec(
            `g++ ${filePath} -o ${outPath} && cd ${dir} && .\\${jobId}.exe`,
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
    });
}
module.exports = {
    executeCpp,
};
