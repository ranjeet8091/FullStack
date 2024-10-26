    const express=require("express");
    const multer = require("multer");
    const path=require("path")
    const upload=multer({dest:path.join(__dirname,"/public")})
    const app=express();

    app.get("/",(req,res)=>{
        res.sendFile(__dirname+"/upload.html");
    })

    app.post("/upload",upload.single("image"),(req,res)=>{
        res.send("Upload succesfully")
    })

    app.listen(3000,()=>{
        console.log("Server is running on port number 3000")
    })
    