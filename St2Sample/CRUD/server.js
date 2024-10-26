    const express = require("express");
    const app = express();
    const mongo = require("mongodb");
    const client = mongo.MongoClient;
    const object=mongo.ObjectId
    const path = require("path")

    app.use(express.static("."));
    app.use(express.urlencoded({ extended: false }))

    let database;
    client.connect("mongodb+srv://ranjeet09:Tiwari8091@ranjeet.asbjljr.mongodb.net/?retryWrites=true&w=majority&appName=Ranjeet")
        .then(db => {
            console.log("Coneected");
            database = db.db();

            app.listen(3000, (err) => {
                if (err)
                    console.log(err);
                else
                    console.log("Server is running on Port Number 3000")
            })
        })
        .catch(err => {
            console.log(err);
        })

    ////'// Routes

    app.get("/show", (req, res) => {
        res.sendFile(path.join(__dirname, "/ShowUser.html"));
    });


    app.get("/getUsers", async (req, res) => {
        const data = await database.collection("user").find({}).toArray();
        res.json(data);

    });


    app.post("/addUser", async (req, res) => {
        const { user, email } = req.body;

        const userExist = await database.collection("user").findOne({ user, email });
        if (userExist) {
            res.send("User already exist")
        }
        else {
            const result = database.collection("user").insertOne({ user, email });
            console.log(result);
            res.send("User added succesfully");

            setTimeout(() => {
                res.redirect("/show");
                
            }, 4000);
        }

    })


    app.post("/deleteUser", async (req, res) => {
        const userID = req.body.userID;
        const result = await database.collection("user").deleteOne({ _id: new object(userID) });

        if (result.deletedCount === 1)
            {
            console.log("User deleted successfully");
            res.redirect("/show")
        } 
        else {
            res.status(404).send("User not found");
        }
    });

    




    app.get("*", (req, res) => {
        res.sendStatus(400).send("Page not found")
    })

