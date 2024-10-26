const express = require("express");
const app = express();
const path = require("path")
const multer = require("multer")
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

///GET Method---------------------------------------------------------------------------------------
app.get("/", (req, res) => {
    res.send("Enter Which type of Field You want to work");
})
app.get("/uploadDifferentField", (req, res) => {
    res.sendFile(path.join(__dirname,"uploadDifferentFields.html"))
})

app.get("/uploadSameField",(req,res)=>{
    res.sendFile(path.join(__dirname,"uploadSameFields.html"))
})

app.get("/uploadSingle",(req,res)=>{
    res.sendFile(path.join(__dirname,"uploadSingle.html"))
})
//--------------------------------------------------------------------------------------------------

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        if (ext == ".jpg" || ext == ".png" || ext == ".jpeg" || ext==".pdf") {
            if (ext == ".jpg") 
            {
                cb(null, path.join(__dirname, "public", "JPG"))
            }
            else if(ext==".pdf")
            {
                cb(null,path.join(__dirname, "public", "PDF"))
            }
            else 
            {
                cb(null, path.join(__dirname, "public", "OTHERS"))
            }
        }
        else 
        {
            console.log("Invalid request");
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})


const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();

    if (ext === ".jpg" || ext === ".png" || ext === ".jpeg" || ext==".pdf") 
    {
        cb(null, true); 
    }
    else {
        cb(new Error("Invalid request. Accept only JPG, PNG, JPEG"), false);
        console.log("Invalid request. Only JPG, PNG, JPEG are allowed.");
    }
};

const limits = {
    fileSize: 2 * 1024 * 1024,
    files:4
};

const upload = multer({ storage: storage, fileFilter: fileFilter, limits: limits })

//POST ----------------------------------------------------------------------------------------------------------
// // field is used for more then one fiead like there are 2 two files (image,pdf) for this we are using filead
app.post("/uploadDifferentField", upload.fields([{name:"image",maxCount:1},{name:"pdf",maxCount:2}]), (req, res) => {
    res.send("uploaded  Diffrent Fields sucessfuly")
})

// it is uses when mutiple files are required of same files
app.post("/uploadSameField",upload.array("image"),(req,res)=>{
    res.send("Uploaded same field")
})

// it is uses when single filed is required
app.post("/uploadSingle",upload.single("image"),(req,res)=>{
    res.send("Upload Single")
})
//-----------------------------------------------------------------------------------------------------


app.listen(3000, (err) => {
    console.log("Server is connected")
}) 