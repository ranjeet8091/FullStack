 //EJS///
 // Embedded Javascipt
 // 1) HTML pages javascript code is embedded for putting dynamic data
 //2) Server side rendering
 // 3)Code compilation wiil be at server side
 // <% %>
 // <%= %>  for printing value
 // <%# %> it is used for comment
// <%- include() -%>  partial views
// it is use for creating views

const express=require("express");
const app=express();
app.set("view engine","ejs");
const fs=require("fs")

// app.get("/",(req,res)=>{
//     res.render("index",{"name":"Ranjeet Tiwari",courses:["first","name","java","ADI"]}) // three argument and put inside 1) views 2) option 3) callbach
// })

// create a file json file student name, roll no,program,sem

app.get("/",(req,res)=>{
    
    const data =JSON.parse(fs.readFileSync(__dirname+"/student.json"));
    res.render("index",{"data":data});

})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})