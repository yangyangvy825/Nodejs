
const mysql=require("mysql");
let connection=mysql.createConnection({
    user:'root'
})
connection.connect(()=>{
    connection.query("select 1",(err,results,fileds)=>{
        if (err) throw err;
        console.log(results);
    })
})
