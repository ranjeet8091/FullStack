//------------------------------------------------------------------------------------------------
// Example of setTimeOut
// function demo()
//  {
//     console.log("Hello")
// }
// console.log("Hi");

//  setTimeout(()=>{
//     demo();
//  },1000)

// setTimeout(demo, 0) // async programing  it is 0 time but it also go to webAPI then api send to the micro queue and
// //  //then event loop check contineously after completion webAPI send to stack
// // console.log("Goodbye")

///------------------------------------------------------------------------------------------------


function demo(msg) {
    console.log(msg)

}
console.log("Hi");

 setTimeout(()=>{
    demo("time");
 },1000)

setTimeout(demo, 0,"Hello Ranjeet")
console.log("Goodbye")



///// Concept of Callback

// const posts=[
//     {
//         title:"Post One",
//         body:"This is post one"
//     },
//     {
//         title:"Post Two",
//         body:"This is post one"
//     },

// ]

// function getPosts()
// {
//     let output="";
//     setTimeout(()=>{
//      posts.forEach((e)=>{
//         output+=`<li>${e.title} <br>  ${e.body}</li>`// this string template
//      })
//     document.body.innerHTML=output;
//     },1000)
// }
// getPosts();

// function createPost(post,Callback)
// {
//     setTimeout(()=>{
//         posts.push(post);
//         Callback();


//     },2000);

// }
// createPost({title:"post Three" , body: "This is post three"},getPosts);
// console.log(posts)



/// Promise
// const posts=[
//     {
//         title:"Post One",
//         body:"This is post one"
//     },
//     {
//         title:"Post Two",
//         body:"This is post one"
//     },

// ]

// function getPosts()
// {
//     let output="";
//     setTimeout(()=>{
//      posts.forEach((e)=>{
//         output+=`<li>${e.title} <br>  ${e.body}</li>`// this string template
//      })
//     document.body.innerHTML=output;
//     },1000)
// }
// getPosts();

// function createPost(post)
// {
//      return new Promise((resolve,reject)=>{

//        setTimeout(()=>{
//         posts.push(post);

//         let error=false;

//         if(!error)
//         {
//             resolve();
//         }
//         else
//         {
//             reject("Error : Something went wrong");
//         }

//     },2000);

//      })


// }
// createPost({title:"post Three" , body: "This is post three"}).then(getPosts).catch(err=>console.log(err));
// console.log(posts)


// const Promise1=Promise.resolve("Hello World");
// const Promise2=100;
// // const Promise3=new Promise((resolve,reject)=>{
// //     setTimeout(demo,1000,"Goodbye")

// // })

// Promise.all([Promise1,Promise2]).then((value)=>{console.log(value)})

// // if(true)
// // {
// //    setTimeout(demo,1000,"Goodbye");
// // }
// // else{

// // }


///Fetch
const data = fetch('https://jsonplaceholder.typicode.com/posts').then((value) => {
    console.log(value);
}).then()