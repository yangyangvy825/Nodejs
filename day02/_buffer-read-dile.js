const fs=require('fs');
console.log(__dirname);//��ǰ�ļ��ľ���·��
console.log(__filename);//��ǰ�ļ�·��

fs.readFile(__filename,(err,data)=>{
    if (err) throw err;
    console.log(data);
})
