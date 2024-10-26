const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path")
const session = require("express-session");
const cookieparseer = require("cookie-parser");
const oneDay = 1000 * 60 * 60 * 24

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }))
app.use(cookieparseer());

app.use(session({
    saveUninitialized: true,  //  any user login and requested without data in form. session is created in true
    secret: "Ranjeet 1233",// for encryption  the key
    resave: false,// one requested from other tabs and it is not create session for different tab/false not create different sesssion for different tab
    cookie: {
        maxAge: oneDay // timeout time
    }
}))

function seesionVerify(req, res, next) {
    if (!req.session.username) {
        res.redirect("/login");
    }
    else {
        next();
    }
}

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const data = JSON.parse(fs.readFileSync("./public/user.json", "utf-8"))
    console.log(Array.isArray(data));

    const matchUser = data.filter(element => (element.username == username && element.password == password));

    if (matchUser.length > 0) {
        req.session.username = username
        res.redirect("/dashboard")

    }
    else {
        res.redirect("/login")
    }


})

app.get("/dashboard", seesionVerify(), (req, res) => {


    res.sendFile(path.join(__dirname, "./public/dashboard.html"));


})


app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("./login")
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Server is running on 3000........")
    }

})