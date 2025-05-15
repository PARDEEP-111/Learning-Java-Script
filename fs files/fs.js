const fs = require("fs")
console.log(fs);
 fs.writeFileSync("Harry.txt", "harrry is a good boy.")
 fs.writeFile("NONAME.txt", "harry is none.", () => {
   console.log("my name is done")
   fs.readFile("harry.txt",(data,error) => {
     console.log(data,error.toString());
     
   }
    )
 }
 )
 fs.appendFile("harry.txt", " harry is noob", (e,data) => {
   console.log(data)
 }
 )