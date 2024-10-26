const http = require("http");
const url = require("url")
const fs = require("fs");
const server = http.createServer((req, res) => {

    if (req.url == "/" && req.method == "GET") 
        {
        res.end(fs.readFileSync(__dirname + "/index.html", "utf-8"))
    }
    else if (req.url == "/script.js") {
        res.end(fs.readFileSync("./script.js"));

    }

    else if ("/getDetails" && req.method == "POST") {
        console.log("reached")
        let data = '';
        req.on('data', (chunk) => {
            data = data + chunk
        })
        req.on('end', () => {
            console.log(data);
            const newId =JSON.parse(data);
            console.log(newId);
          const details=  JSON.parse(fs.readFileSync("./employee.json","utf-8"));
         const emp= details.filter(ele=> ele.empid==newId.val)

         if(emp.length>0)
         {
           res.end(JSON.stringify(emp[0]))
         }
         else{
            res.end(JSON.stringify({msg:"inValid Employee"}))
         }

        })
    }
    else{
        res.end();
    }

})
server.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server is running on port number 3000")
    }
})