
//buffer »º³åÇø

let buff1=new Buffer(32);
console.log(buff1);

let buff2=new Buffer([66,67,68]);
console.log(buff2);
const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);
let buff=Buffer.alloc(10);
let s1="AA";
buff.write(s1,2);
console.log(buff);
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('ascii'));
console.log(Buffer.isEncoding('binary'));
console.log(Buffer.isEncoding('base64'));
let buffe=Buffer.from("ÄãºÃ!");
console.log(buffe);
for(let i=0;i<buff.length;i++){
    console.log(buff[i]);
}
for(let k in buffe){
    console.log(k+"->"+buffe[k]);

}
