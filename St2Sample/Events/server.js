

// Question 1
//Write a Node.js script that uses the EventEmitter class to create an event called 'greet'.The event
// should take a name as an argument and print Hello, [name]!.Register a listener for the
// 'greet' event and emit the event with the name "Alice".

//Answer
// const events=require("events");
// const EventEmitter=new events();

// EventEmitter.on("great",(name)=>{
//     console.log(`Hello ${name}`);
// })

// EventEmitter.emit("great","Ranjeet");


//----------------------------------------------------------------------------------------------------
// Quesion 2
//Extend the EventEmitter class to create a custom class TaskManager that emits two events: 
//taskStart' and 'taskComplete'. Register listeners for both events. When the 'taskStart' event is emitted, 
//it should print Task started with ID: [id]. When the 'taskComplete' event is emitted, 
//it should print Task completed with ID: [id].

// const events = require("events");

// class TaskManager extends events {
//     startTask(id) {
//         console.log(` Starting with ${id}`);
//         this.emit("taskStart", id);
//     }
//     taskComplete(id) {
//         console.log(` ending with ${id}`);
//         this.emit("taskComplete", id);
//     }
// }

// const taskManger=new TaskManager();
// taskManger.on("taskStart",(id)=>{
//     console.log(`Task starting with id ${id}`)
// })

// taskManger.on("taskComplete",(id)=>{
//     console.log(`Task Completed with id ${id}`)
// })



// taskManger.startTask(221198)
// taskManger.taskComplete(22)


// Question number 3

//Create an EventEmitter instance that listens for an event 'order'. When an 'order' event is emitted,
 //pass an object with order details { id, item, quantity } to the listener,
  //and log a message like Order received: [item] x [quantity] (Order ID: [id]).
   //Emit the event with a sample order object.


//    const event=require("events");
//    const EventEmitter=new event();

//    EventEmitter.on("order",(orderDetails)=>{
//       console.log(`id : ${orderDetails.id} item :${orderDetails.item} Qty: ${orderDetails.Qty}`)

//    })

//    EventEmitter.emit("order",{id:2211985039,item:"Ranjeet Tiwari",Qty:"Unique"})


// Question number 4
//   const EventEmitter=require("events");
//   class Car extends EventEmitter{
//     start()
//     {
//         console.log("Engine Started")
//         this.emit("engineStart")
//     }
//   }

//   const car=new Car();
//   car.start()
//   car.on("engineStart",()=>{
//     console.log("Engine started fully")
//   })


