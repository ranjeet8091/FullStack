// // Node.js
// let msg="Hello world";
// let obj={
//     name:"Ranjeet"
// }
// function log(msg)
// {
//     console.log(msg);
// }

// //exports.msg=message // this used to add in exports object
// module.exports={ // this on overwrite on exports object
//     msg,
//     obj,
//     log,
// }
//-------------------------------------------------------------------------------------------------------------
//EVENTS
// const EventEmitter=require("events");// first letter is Capital .it is  a class
// const { emit } = require("process");
// const emitter=new EventEmitter();
//emitter.addListener
// Listening and Handiling events
// emitter.on("logged",function(arg){
//     console.log("User logged " + arg.userName);
// })

// //Raising an event
// // if emmiter.on put it after emit then after full project creation error is event is happen with not handle 
// // so first on then emitter
// // emitter.emit("logged",{userName:"Ranjeet"});

// module.exports={
//     emitter,
//     emit
// }


// class Logger extends EventEmitter{
//          log()
//          {
//             console.log("Evnt Emitted");
//             this.emit("logit",{userName:"Ranjeet Tiwari"})
//          }
        
// }

// const logger=new Logger();
// module.exports=logger


//HTTPS
const https=require("http");

const server=https.createServer((req,res)=>{
    res.write("Hello i am listening")
    res.end();
});

server.listen(4000);

/// html// json data//array of object//
//------------------------------------------
// Http module 
//1) Create server
// 2) Request handle
// 3) Generalized function

//---------------------------------------------------
// Express Framework
// 1) File Handling
// 2) MiddleWare  // Static // urlencoded
// 3) Get/post
// 4) Login