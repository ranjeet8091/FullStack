// Express Framework
// 1) File Handling
// 2) MiddleWare  // Static // urlencoded
// 3) Get/post
// 4) Login

const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path")

app.use(express.static("."));
app.use(express.urlencoded({extended:false}));

// by default method is get
//  req.method=="Get" in http if else
app.get("/", (req, res) => {
    res.send("Welcome Ranjeet's Server")
})



// when we are using sendFile then we use absolute path
// app.get("/index.html", (req, res) => {
//     // console.log(__dirname)
//     // console.log(__filename)
//     res.sendFile(__dirname + "/index.html");// both can work line 22
//     res.sendFile(path.join(__dirname + "/index.html"));
// })
// app.get("/style.css", (req, res) => {
//     res.sendFile(path.join(__dirname, "/style.css"));
// })

app.get("/getData",(req,res)=>{
    const {user,Pass}=req.query;
    console.log(user +" "+Pass)
    res.send(`Welcome ${user}`)
})

app.get("*", (req, res) => {
    res.sendStatus(404)//.sendFile()
})


app.listen(3000, () => {
    console.log("Server is running on 3000...");
})