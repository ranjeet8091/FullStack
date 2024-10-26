//------------------------------------------------------------------------------------------------------------------------
// // Task 1 factorial of the number . in both case number is pass in number or argument form

// function fact(number: number | string): number 
// {
//     if (typeof number === 'string') {
//         number = parseInt(number);
//     }
//     if (number === 1 || number === 0) {
//         return 1;
//     }
//   return number * fact(number - 1);
// }

// console.log(fact(6));   
// console.log(fact("6")); 
//------------------------------------------------------------------------------------------------------------------------
// Task 2 Change fahrenheit To celcius .in both case number is pass in number or argument form

// function fahrenheitToCelsius(input: number | string): number {
//     let fahrenheit: number;

//     if (typeof input === "string") {
//         fahrenheit = parseFloat(input);
//         if (isNaN(fahrenheit)) {
//            console.log("Error");
//         }
//     } 
//      else {
//         fahrenheit = input;
//     }

//     const celsius = (fahrenhe4it - 32) * 5 / 9;
//     return parseFloat(celsius.toFixed(2));
// }

// console.log(`${fahrenheitToCelsius(98.6)}`);   
// console.log(`${fahrenheitToCelsius("100")}`);

//-----------------------------------------------------------------------------------------------------------------------

//  Task 3
// Function addConcate two argument as input ( Number or String )
// if both arguments of number type function will return sum
// if any one are string type  then concate

// function  addConcate(num1:number|string,num2:number|string):number | string {
//     if(typeof num1==="number" && typeof num2==="number")
//         return num1+num2;
//     else
//       return ""+num1+num2;
//     // else if(typeof num1==="string" )
//     // {
//     //     num2=num2.toString();
//     //     return num1.concat(num2);
//     // }
//     // else if(typeof num2==="string" )
//     //     {
//     //         num1=num1.toString();
//     //         return num2.concat(num1);
//     //     }

// }

//  console.log(addConcate(12 ,13));
//  console.log(addConcate(12 ,"Ranjeet"));
//  console.log(addConcate("tiwari" ,"Ranjeet"));
 //console.log(addConcate(true,45)); 
 /// interview question
//Ques1  console.log(addConcate(true,45));  it is work in js but it is not in typescript  and is true45

//---------------------------------------------------------------------------------------------------------------------------

//    Task 4
// function addAll which return the sum of all the arguments passed.

// function addAll(...numbers:number[]):number {
//      return numbers.reduce((sum,current)=>sum+current,0);// zero is used initialise sum with zero
// }

// console.log(addAll(0));
// console.log(addAll(12,13,14));


//-----------------------------------------------------------------------------------------------------------------------------


