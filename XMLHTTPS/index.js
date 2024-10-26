//---------------------------------------------------------------------------------------------------------------
//TASK 1
//Create request
const request=new XMLHttpRequest();

//prepare request
request.open("GET","./data.txt",true)/// true means Async mode  --by deault it is Async mode

//Handling the response
request.addEventListener("load",()=>{
    console.log(request.responseText);
})

//Sending the request
request.send();

//-------------------------------------------------------------------------------------------------------------
//Task2

// //Create request
// const request=new XMLHttpRequest();

// //prepare request
// request.open("GET","./data.json",true)/// true means Async mode  --by deault it is Async mode

// //Handling the response
// request.addEventListener("load",()=>{
//     const data=JSON.parse(request.responseText)
//     console.log(data);
//     data.forEach(element => {
//         console.log(element.name +"  " + element.Age)
//     });
    
// })


// //Sending the request
// request.send();

//-------------------------------------------------------------------------------------------------------------


////Task3  using API
//Create request 
// const request=new XMLHttpRequest();

// //prepare request
// request.open("GET","https://jsonplaceholder.typicode.com/todos",true)/// true means Async mode  --by deault it is Async mode

// //Handling the response
// request.addEventListener("load",()=>{
//     const data=JSON.parse(request.responseText)
//     console.log(data);
//     data.forEach((element, index,arr) => {
//         console.log( index+1 + " "  + element.title)
//     });
    
// })
// //Sending the request
// request.send();

//----------------------------------------------------------------------------------------------------------
///   Now sending the data

//Create request 
// const request=new XMLHttpRequest();

// //prepare request
// request.open("POST","https://reqres.in/api/users",true)/// true means Async mode  --by deault it is Async mode

// //Handling the response
// request.addEventListener("load",()=>{
//     const data=JSON.parse(request.responseText)
//     console.log(data);
    
    
// })
// //Sending the request
// request.setRequestHeader("content-type","application/json");
// const obj={
//     "name":"Ranjeet",
//     "Job":"Developer"
// }
// request.send(JSON.stringify(obj));

//-------------------------------------------------------------------------------------------------------------

///Sending data from form
//form  /username an password;
//Create request 
// do this with XHR

// const formE1=document.querySelector(".form1");
// formE1.addEventListener("submit",(event)=>{
//      event.preventDefault();
//     const formData= new FormData(formE1);
//     console.log(formData.get("user"));
//     const data=new URLSearchParams(formData); /// for multiple field 

//     const req=new XMLHttpRequest();
//     req.open("POST","https://reqres.in/api/users");
//     req.addEventListener("load",()=>{
//         console.log(JSON.parse(req.responseText));
//     })
//     req.setRequestHeader("content-type","application/x-www-form-urlencoded");
    
//     req.send(data);

// })

//-----------------------------------------------------------------------------------------------------------

// Do This with fetch

// const formE1=document.querySelector(".form1");

// formE1.addEventListener("submit",(event)=>{
//      event.preventDefault();
//     const formData= new FormData(formE1);
//     console.log(formData.get("user"));
//     const data=new URLSearchParams(formData); /// for multiple field 

//    fetch("https://reqres.in/api/users",{
//     method:"POST",
//    header:{
//     "Content-type":"application/x-www-form-urlencoded",
//    },
//    body:data
//    })
//    .then(Response=>Response.json())
//    .then((result)=>{
//     console.log(result);
//    })
//    .catch(err=>{
//     console.log(err)
//    })

// })

//------------------------------------------------------------------------------------------------------------

/// do this with Async await 


// const formE1=document.querySelector(".form1");
// formE1.addEventListener("submit",async (event)=>{
     
//    event.preventDefault();
//     const formData= new FormData(formE1);
//     console.log(formData.get("user"));
//     const data=new URLSearchParams(formData); /// for multiple field 

//    const res=await fetch("https://reqres.in/api/users",{
//     method:"POST",
//    header:{
//     "Content-type":"application/x-www-form-urlencoded",
//    },
//    body:data
//    })
   
//    const result=await res.json();
//    console.log(result)

// })

//----------------------------------------------------------------------------------------------------------

// Do this with async await different function
// const formE1=document.querySelector(".form1");
// formE1.addEventListener("submit",dothis);

// async function dothis(event) {
//    event.preventDefault();
//     const formData= new FormData(formE1);
//     console.log(formData.get("user"));
//     const data=new URLSearchParams(formData); /// for multiple field 

//    const res=await fetch("https://reqres.in/api/users",{
//     method:"POST",
//    header:{
//     "Content-type":"application/x-www-form-urlencoded",
//    },
//    body:data
//    })
   
//    const result=await res.json();
//    console.log(result)
   
// }

//------------------------------------------------------------------------------------------------------------














