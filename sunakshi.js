//--------------------------------------------------------------------------------------------------
// Scope of var and let
// function sum()
// {
//   var num=10;// var function scope
//   {
//     let num2=20; // let blocl
//   }
//   console.log(num2);
// }
// sum();


//scope
// const a=10
// function x()
// {
//     var b=20;
//     console.log(a);
//     {
//         let c=30
//         console.log(c)
//     }
//     console.log(b)
 
// }

// x();


// testing const
// const num=10;
// num=20;
// console.log(num)

///Assignment to constant variable. error

//----------------------------------------------------------------------------------------------


// Hoisting property
// a=20;
// let a=10; // let cannot supports hoisting property
// console.log(a);

// a=20;
// var a=10; // var supports hoisting property
// console.log(a);

// var a;
// var b;
// const c;//'const' declarations must be initialized

//----------------------------------------------------------------------------------------------------

// conditional Statements

// var bol = false;
// var bool="false";

// if(bool===false)
// {
//     console.log("True");
// }
// else
// {
//     console.log("False");
// }


// //var result=(10>9)?"Ranjeet":"Sagar";
// console.log((10>9)?"Ranjeet":"Sagar")

//---------------------------------------------------------------------------------------------------
//Loop
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }


// let i=1;
// while(true)
// {

//     console.log(i);
//     if(i>=10)
//         {
//             break;
//         }

//         i++;

// }


// let i=1;
// do{
//  console.log(i);

// }while(i<1);


//---------------------------------------------------------------------------------------------------

/// Array

// declaration with the help of literals
// var arr=[1,"Ranjeet","you",true,{name:"ranjeet",age:20}];
// console.log(arr);

//declaration with the help of Constructor
// var arr1=new Array(1,"Ranjeet","you",true,{name:"ranjeet",age:20});
// console.log(arr1)

// var arr3=[1,2,,4];
// console.log(arr3)//[ 1, 2, <1 empty item>, 4 ]

// var arr3=[1,2,,,4];
// console.log(arr3) //[ 1, 2, <2 empty items>, 4 ]


// Functions in Array
var arr5=[1,2,3,4,5,6,7,8,9];
// 1) pop // it delete the last element
// arr5.pop();
// console.log(arr5)

// 2) push() // it add the element at last
//   arr5.push(1,2,3,4);
//   console.log(arr5)

// 3) shift() //  it delete the elent from the starting
//   arr5.shift();
//   console.log(arr5);

// 4) unShift() // it add the alement from the starting
//  arr5.unshift(2,2,2);
//  console.log(arr5);

// 5) slice // it give the gives array

//   let sl=arr5.slice(1,5);// one count 
//   console.log(sl);

// 6) splice  // to add or remove 

//   arr5.splice(1,3,20);// firt - starting index , second - remove count , third ownward -- add
//   console.log(arr5)

// // 7) length
// console.log(arr5.length);


// 8) sort()
// var arr5=[10,2,3,4,8,6,7,6,12,1];
// arr5.sort()
// console.log(arr5)


// 9) split()
//   var str="Ranjeet Tiwari Sunakshi";
//   var newStr=str.split(" ");
//   console.log(newStr);

// 1) find the biggest word from the given string.
// 2) find the biggest word length
// 3)find minimum length
// 4) find the number word from the string
// 5)find the palidrome word;

// 10) concate() // it gives the new Array
// var arr5=[10,2,3,4,8,6,7,6,12,1];
// var arr=["Ranjeet"];
// var newarr=arr5.concat(arr);
// console.log(newarr);

 




// nested Array Or 2-D array

// var arr4=[[1,2,3,4],[5,6,7,8],[9,10,11,13]];
//   console.log(arr4[1][2]); // 7 output

// to access elemnt with for-of loop
// var arr5=[1,2,3,4,5,6,7,8,9];
// for(var ele of arr5)
// {
//     console.log(ele);
// }

// iterators

// 1) forEach
/// we work on for accesing element only . it is not gives new array .
// var arr5=[1,2,3,4,5,6,7,8,9];

// arr5.forEach((val,index,arr)=>{
//     console.log(" value "+val + " index of value " + index + " array value " + arr[index]);
// })


// Question 1
// var arr5=[1,2,3,4,5,6,7,8,9];
// arr5.forEach(ele=>{
//     if(ele%2==0)
//     {
//         console.log
//     }
// })


// 2) Map
// map is used when we need new array. its gives a new array of same length of original array

// var arr5=[1,2,3,4,5,6,7,8,9];

// let newarr=arr5.map((elemnt,index,arr)=>{
//     return elemnt*2;
// })
// console.log(newarr)


// 3) Filter
// filter is used when we need array .its gives a new array of elemnt that satisfy the condion

// var arr5=[1,2,3,4,5,6,7,8,9];
// var newarr=arr5.filter(elemnt=>{
//     if(elemnt%2==0)
//         return elemnt
// })

// console.log(newarr)

// var arr5=[1,2,3,4,5,6,7,8,9];
// var newarr=arr5.filter(elemnt=>{
//      return elemnt%2!=0
// })

// console.log(newarr)

// Question 2
// let arr=[1,2,"Ranjeet",3,4,"Tiwari", 5,6,"Sunakshi"];

// var count=0;
// arr.forEach(element=>{
//     if(typeof(element)=="string")
//         count++;
//  })
//  console.log(count)

//  console.log(typeof(arr[2]))// for checking type

// Question3
// var arr5=[1,4,6,2,3,5,8];
// let a=1
// let b=5
// let newarr=arr5.filter(elemnt=>{
//     return (elemnt>=a && elemnt<=b);
// })
// console.log(newarr)




//Function
// to increase reusability

//1) Naming

// function Ranjeet()
// {
//     console.log("Ranjeet");
//     return "Ranjeet";
// }
// console.log(Ranjeet());

//2)  Anonymous function

// const sum=function()
// {
//     return 10+20;
// }
// console.log(sum());

// 3) Arrow Function
//  const sum= () => {
//     console.log(10+20);
//  }
//  sum()

// 4) self invoking

// const sum=function sum(a,b)
// {
//     console.log(a+b);
// }(10,20)


// function expression

// let sum=function(a,b)
// {
//     return a+b;
// }
// console.log(sum(10,20))

////// Objects
 
// const obj={
//     name:"Ranjeet",
//     age:22,
//     isStudent:true
// }
// delete obj.name

// console.log(obj.name);
// obj.name="Sunakshi";
// console.log(obj.name);
// console.log(obj["name"])
// console.log( "name" in obj);// for cheking the key


// interpolation

`StudentName ${sname} Grade ${max}`


// + 
"StudentName " + sname + "Grade "+ max;





