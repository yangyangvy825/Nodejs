const fs=require('fs');
console.log(__dirname);//当前文件的绝对路径
console.log(__filename);//当前文件路径

fs.readFile(__filename,(err,data)=>{
    if (err) throw err;
    console.log(data);
})
