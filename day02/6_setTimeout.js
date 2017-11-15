var before=new Date().getTime();
console.log(before);
setTimeout(()=>{
    var now=new Date().getTime();
    console.log(now);
   console.log("ashf"+(now-before));
},1000);
