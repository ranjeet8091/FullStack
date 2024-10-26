//-------------------------------------------------------------------------------------------------------
//1)SIMPLE FUNCTION AND ASYNC FUNCTION
//----------------------------
// Simple function
// function f()
// {
//     return 1;

// }
// console.log(f());
// it return number

//----------------------------
// //Asysn function
// async function f()
// {
//     return 1;

// }

// console.log(f());// it return promise
// f().then(console.log("ranjeet")) //it return
//-----------------------------------------------------------------------------------------------------
 


// // Await
// async function f()
// {
//     let val=await Promise.resolve("Hello");// async functions to pause the execution of the function until a Promise is resolved or rejected
//     console.log(val)

// }
//  f();


 //---------------------------------------------------------------------------------------

 // 2) CAN WE HAVE MULTIPLE AWAIT IN INSIDE SINGLE ASYNC
 // ANS- yes 


//  function asynchronousDemo()
//  {
//     let prom1=new Promise((resolve,reject)=>{
//      resolve("Hello");
//     })

//     let prom2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Ranjeet")
//         },5000)
        
//     })

//     let combinedPromise=Promise.all([prom1,prom2])// if all result is thier then all result show 
//     return combinedPromise;
//  }

//  async function display()
//  {
//     let result= await asynchronousDemo();
//     console.log(result);
//  }

//  display();

//---------------------------------------------------------------------------------------------------



//this is  synchronous
// const getData=()=>{
//     let y= "Hello World"; // wrap into promise
//     console.log(y);
// }
// console.log(1);
// getData();
// console.log(2);


///this is asynchronoud
// const getData=async()=>{
//     let y= await "Hello World"; // wrap into promise
//     console.log(y);
// }
// console.log(1);
// getData();
// console.log(2);