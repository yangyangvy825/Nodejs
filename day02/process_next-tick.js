
console.log("start");
setImmediate(function(){
    console.log("set");
})
process.nextTick((msg)=>{
    console.log("next-tick "+msg);
},"ueafffffffegv")
console.log("end");