//Quest 1)  create a function that can calculate the tax on  income and return only number.

// function calculateTax(income:number|string):number{
//       if(typeof(income)=='number')
//       {
//         return income*2;
//       }
//       else
//       {
//         income=Number.parseInt(income)
//         return income*1;
//       }
// }
// console.log(calculateTax(10000))
// console.log(calculateTax("10000"))

//Ques 3) type alis 
//  type Student={
//     name:string,
//     Stud_id:number,
//     section?:string,
//     TotalMarks:Function
//  };

//  let Ranjeet:Student={
//     name:"Ranjeet",
//     Stud_id:2211985039,
//     TotalMarks:(English:number):number=>{
//       return English
//     }
//  }

//  console.log(Ranjeet.name)
//  console.log(Ranjeet.TotalMarks(20))


// Ques 4)  Write a function that can can accept string and number

// function Multiply(a:number|string,b:number|string):number{
//       if(typeof(a)=='number' && typeof(b)=='number')
//       {
//         return a*b;
//       }
//       else if(typeof(a)=='string')
//       {
//         return Number.parseInt(a)*b;
//       }
//       else if(typeof(b)=='string')
//         {
//           return Number.parseInt(b)*a;
//         }
//         else{
//             return Number.parseInt(b)*Number.parseInt(a);
//         }

// }
// console.log(Multiply("20","30"));

// Ques 5) Write two types and use inetrsection this two type then use it
//  type User={
//   name:string,
//   age:number
//  }

//  type Provider={
//   product:string
//  }
//  type main=User & Provider

//  const Ok:main={
//   name:"Ranjeet ",
//   age:19,
//   product:"laptop"
//  }

//  console.log(`Name: ${Ok.name}`)

// Quest 6) create a  class ranjeet print all the details of of ranjeet after instaiation
//  class Student{
//   private name;
//   private age;
//   public constructor(name:string,age:number)
//   {
//     this.name=name;
//     this.age=age;
//   }

//   public ShowData():void
//   {
//     console.log(`The name of student is ${this.name} and the age is ${this.age}`)
//   }
//  }

//  const st1:Student=new Student("Ranjeet",19);
//   st1.ShowData()

// Ques 7) implement interface in any class
interface Details {
  getName(): string;
  getAge(): number;
}

class Student implements Details {
  private name;
  private age;
  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public getName(): string {
    return this.name
  }
  public getAge(): number {
    return this.age
  }
}

 const st1:Student=new Student("Ranjeet",22);
console.log(`The name of user is ${st1.getName()} and the age is ${st1.getAge()}`);
