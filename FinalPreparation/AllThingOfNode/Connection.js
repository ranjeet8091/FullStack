const express=require("express");
const app=express();
const mongodb=require("mongodb");
const client=mongodb.MongoClient;

let db;
client.connect("mongodb+srv://ranjeet09:Ranjeet09@ranjeet.asbjljr.mongodb.net/?retryWrites=true&w=majority&appName=Ranjeet")
.then(database =>{
    db=database.db();
    console.log("Mongo Db Connected")

})
.catch(err=>{
    console.log(err);
})

module.exports={db,app};