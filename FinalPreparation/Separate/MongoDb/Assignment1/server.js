const express=require("express");
const app=express();
const path=require("path")
const mongodb=require("mongodb");
const client=mongodb.MongoClient;


app.use(express.urlencoded({extended:false}))
app.use(express.json());
////connect
let db
client.connect("mongodb+srv://ranjeet09:Tiwari8091@ranjeet.asbjljr.mongodb.net/?retryWrites=true&w=majority&appName=Ranjeet")
.then(database=>{
    db=database.db("Product");
    console.log("connected")
})
.catch(err=>console.log(err))

//////////////

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/Showall",async(req,res)=>{
    const data=await db.collection("prodcuts").find({}).toArray();
    res.send(data);
})

app.post("/Add", async (req,res)=>{
    const {productName,type}=req.body;
    const data=await db.collection("prodcuts").find({}).toArray();
    const match=data.filter(ele=>ele.productName==productName && ele.type==type)

     if(match.length==0)
        {
            const result=await db.collection("prodcuts").insertOne({productName:productName,type:type});
            if(result)
            {
               res.redirect("/Showall")
            }
        }  
    else{
        res.send("Product is already added")
    }
})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Server is running on port number 30000")
})