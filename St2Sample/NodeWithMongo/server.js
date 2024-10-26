const express=require("express");
const app=express();

const mongo=require("mongodb");
const client=mongo.MongoClient;
app.use(express.urlencoded({extended:false}))
app.use(express.static("."));
let database;
client.connect("mongodb+srv://ranjeet09:ranjeet09@ranjeet.asbjljr.mongodb.net/?retryWrites=true&w=majority&appName=Ranjeet")
.then((data)=>{
    console.log("connected")
    app.listen(3000,()=>{
        console.log("Server is running on port number 3000")
        database=data.db();
    })
})

app.get("/show",(req,res)=>{
    const data=database.collection("users").find({}).toArray().then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.status(400).send("Error fetching user")
    })
  
})

app.post("/add",(req,res)=>{
    const {user,pass}=req.body;
    
    database.collection("users").findOne({user,pass})
    .then(userExist=>{
        if(userExist)
            {
                res.send("User Exist")
            }
            else
            {
                database.collection("users").insertOne({user,pass})
                .then((data)=>{
                    console.log("User added ")
                    console.log(data)
                    res.send("User added succesfully")
                })
                .catch(err=>{
                   res.send(err);
                })
            }

    })
        .catch((err) => {
            res.status(500).send("Error finding the user");
        });
    

})


app.get("*",(req,res)=>{
    res.send("Invalid Route Address")
})




