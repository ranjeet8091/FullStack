// 1) anonymous function
// const test=function(name:string):string{
//     return name;
// }
// console.log(test("RAnjeet"))
// 2) Named Function
// function func(name:string):string{
//     return name
// }
// console.log(func("Ranjeet"))
// 3) Arrow function 
// const test=(name:string):string=>{
//     return name
// }
// console.log(test("Ranjeet"))
// 4) self invoked function
(function (name) {
    console.log(name);
}("Ranjeet"));
