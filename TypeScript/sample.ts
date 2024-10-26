//----------------------------------------------------------------
//data type  
// number,String 
// let a:number=10.987575757  ;
// let firstname:string='Ranjeet' ;
// let b:string=`welcome ${firstname}v to chitkara`
// console.log(b);

// implicit -- Automatically guess the type based on assigned value is called implitcit or infer property
// Explicit -- Mention manually the type of the varibale

//------------------------------------------------------------------
//boolean
// let isEven: boolean=true;
// console.log(isEven)  // return true
//-------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------
// Special Data types
 // 1) Any -- any is a type that disables type checking and effectively allows all types to be used
    // let a=8989;
    // a="ranjeet" // this gives error
    // // after using any
    // let b:any=8989;
    // b="Ranjett" // not gives error

// 2) Unknown -- unknown is a similar, but safer alternative to any
               //unknown is best used when you don't know the type of data being typed. 
               //To add a type later, you'll need to cast it.
               //Casting is when we use the "as" keyword to say property or variable is of the casted type
        // let a: unknown = "Ranjeet";
        // a=20;
        // let b=a as number;
        // b="ranjeeet"// gives error beacuse of String assignment

// 3) never -- never effectively throws an error whenever it is defined
               // Never is rarely used
    //   let a:never=true // 

// 4) undefined --
           //let a:undefined;
           //console.log(a)// output is undefined
// 5) Null
        //let a:null=null;


// difference between any , unknown , never

// any - it is used in least places
// let val:any=1
// val++;
// val.toUpperCase();
// val.map((ele)=>{
// })
// val.foobar=45;


// unknown
// let val:unknown=1
// if(typeof val==="number") val++;
// if(typeof val==="string")val.toUpperCase();
//  if (Array.isArray(val))val.map((ele)=>{
// })
// if(val && typeof val==="object" && "foobar" in val && typeof foobar ==="number")
//     val.foobar=45;

// //never
// function warning():never{
//     throw new Error("There is something Wrong");
// }

// function spin():never{
//     while(true)
//     {
//         console.log(1);
//     }
//     console.log("Hello");
// }



// Diffrence Between Any And Unknown
//any is a type that disables type checking and effectively allows all types to be used

//----------------------------------------------------------------------------------------------------------

// Array
// let arr=[1,2,3,3,'String',true]// normal array that can have everything 
// let arr1:number[]=[1,'Ranjeet',] // this array gives error because of dataType are fixed number or we are adding string


// let arr2:(string | number)[]=[] // this array can have String and Number both

// let arr3: number[]=[1,2,3,4,5];

// let arr4:Array<number> =[1,2,3,4,5,6,6]; // arr4 is Array of number explicitely
// console.log(arr4);

// let arr3: number[] = [1, 2, 3, 4, 5,6,7];
// console.log(arr3[6].toFixed(3)); // fixed is used for digit after decimal


///---------------------------------------------------------------------------------------------

//tuple
//  let user:[string,number]=["Ranjeet" ,39,] // it fixed size but push is still working
//  let user1:[string,number]=["Ranjeet" ,39,"Ranjeet"] //this gives error beacuse of fixed size
//  user.push("Ranjeet");

//  console.log(user)


//-----------------------------------------------------------------------------------------------------

// //enum
// const orange=1;
// const blue=2;
// const red=3;
// enum Color {
//     orange = "orange",
//     blue = "blue",
//     red = "red"
// }

// const favouriteColor: Color = Color.red;
// console.log(favouriteColor);  // Output: "red"

//----------------------------------------------------------------------------------------------------



// function throwerror(err:string):never{
//     throw new Error(err);
// }
// console.log(throwerror("sagarerr"));

//----------------------------------------------------------------------------------------------

// function display(msg:string)
// {
//     console.log(msg);
// }

// let val:void=display("hi");
// console.log(val);


//----------------------------------------------------------------------------------------------------------------

// function display(msg:string)
// {
//     console.log(msg);
// }

// let val:never=display("hi");
// console.log(val);

//-------------------------------------------------------------------------------------------------------


// functions

// Question 1 calculate tax
// function calculateTax(income:number):number{
//     if(income<50_000)
//         {
//             return income*2.2;
//         }
//         else{
//             return income*2.3
//         }
// }
// console.log(calculateTax(2000));

//---------------------------------------------------------------------------------------------------------


// function calculateTax(income:number):number{
//     if(income<50_000)
//         return 1;
//     else
//     return 2;
// }
// console.log(calculateTax(500000));

///-------------------------------------------------------------------------------------------------------


// function calculateTax(income:number ,texYear:number):number{
//     if(texYear<2024)
//         return income*2.0;
//     else
//     return income*1.2;
// }
// console.log(calculateTax(25_000,2002));

///--------------------------------------------------------------------------------------------------


// function calculateTax(income:number ,texYear:number=2024):number{
//     if(texYear<2024)
//         return income*2.0;
//     else
//     return income*1.2;
// }
// console.log(calculateTax(25_000));//by defualt textyear is initialise in method parameter
// console.log(calculateTax(25_000,2023))// in this i enter 2023 this overwrite on 2024
//----------------------------------------------------------------------------------

// type narrowing

//Question to calculate
// function kgTobs(weight:number|string)
// {
//     if(typeof weight === 'number')
//     {
//         return weight*2.2;
//     }
//     else
//     {
//         return parseInt(weight)*2.2;
//     }
// }
// console.log(kgTobs(10));
// console.log(kgTobs('10'));

//-------------------------------------------------------------------------------------

/// Object

//type alias// custum type

// type Employee={
//     id:number,
//     name?:string,  
//     retire:(date:Date)=>void
// } 

// let employee1:Employee={
//     id:5039,
//     name:"Ranjeet",
//     retire(date:Date) {
//         console.log(date);
//     },
// }

// let employee2:Employee={     /// gives error beacuse of not find name property
//     id:1068,
//     retire(date:Date) {
//         console.log(date);

//     },
// }
// employee2.retire(new Date(Date.now()));

//------------------------------------------------------------------------------------------



/// typeScript defination
//  Feature
//Need
//Transpiler   tsc
//Enironment
// install i typeScript -g
//check    version//
//tsconfig    // tsc init
// setting the input and output folder / not yet
// debugging // not yet


///DataTypes
//Array
//tuple
//enum
// any
// unknown
// never

//type Annomation
// type inference 
//

// function
//union
//type narrowing
// optional parameter  ?
// defualt parameter

// object:
//type alias / custom type



///------------------------------------------------------------------------------------------------
//   function overloading

//Question 1
// function add(a:number ,b:number):number;
// function add(a:string,b:string):string;
// //Signature upper two method is known as Signature  or prototype
// function add(a:any,b:any):any{   // we can use any or unknown
//     return a+b;
// }
// console.log(add(34,65));
// console.log(add("Hello","Ranjeet"));

// Question 2 mul two number 

// function mul(num1:number,num2:number):number;
// function mul(num1:string,num2:string):number;
// //function  mul(num1:string,num1:number):string;

// function mul(num1:any,num2:any)
// {
//     if(typeof num1=="number" && typeof num2=="number")
//     {
//         return num1*num2;
//     }
//     else {
//         num1=parseInt(num1);
//         num2=parseInt(num2);
//         return num1*num2;
//     }
// }
// console.log(mul(3,4))
// console.log(mul("3","4"));
//-----------------------------------------------------------------------------------------------------


//Literals

//  type Quantity=100 | 50;
//  let quantity:Quantity=100;// if i initialise quantity any other numbers intead of 100, 50 then it gives error
// console.log(quantity);

//
// type Metrics="cm"| "inches";
// let metrics:Metrics="cm";
// console.log(metrics)

///--------------------------------------------------------------------------------------------------

//Nullables

// function greet(msg:string | null | undefined):void{
//     console.log(msg);
// }
// greet("Ranjeet");
// greet(null);
// greet(undefined);

//----------------------------------------------------------------------------------------------------


//Optional Chaining

//optional  operator access property
// type Employee={
//     StuName:string,
//     joiningDate?:Date; // if optional remove then employee gives error 

// }
// let employee:Employee={
//     StuName:"ranjeet",
//     joiningDate:new Date()

// }
// console.log(employee.StuName); // This will correctly log "ranjeet"
// console.log(employee.joiningDate?.getFullYear());

//-----------------------------------------------------------------------------
// let arr:any=null;
// console.log(arr?.[0]); // without optianl operator it give error of null
//optinal operator accessing the element

//-----------------------------------------------------------------------------
//optional operator accessing the call
// let greet:any=(msg:string):string=>{
//     return msg;
// } 
// //greet=null;
// console.log(greet("ranjeet")?.("hello")); //greet return string but function so if we are not use operator then it gives error


//------------------------------------------------------------------------------------------------
// intersection

// type Draggable={
//     drag : ()=>void,
//     resize:()=>void;// it optinal only fo checking intersection

// }
// type Resizable={
//     resize :()=>void;
// }

// type UIwidget=Draggable & Resizable ;

// let box :UIwidget={
//     drag:()=>console.log("draggable"),
//     resize: ()=> console.log("resizable")
// }
// box.drag();
// box.resize();



//---------------------------------------------------------------------------------------------------------
//interface
interface Point {
    x: number;
    y: number;
}

function draw(point: Point): void {
    console.log(`Drawing point at (${point.x}, ${point.y})`);
}

// // Example usage
// let point: Point = { x: 10, y: 20 };
// draw(point); // Logs "Drawing point at (10, 20)"
// draw({x:45,y:35})

//important topic
///optional chaining
//union
// custom types and type aliases 
//interfaces


/// question

// create interface properties make , model  are string type , seating-Capacity number type 
// car and bike
// we need to instantiate two varibale one varibale is car type and other on is bike
//create array vehicle type


// type Car = {
//     make: string,
//     model: string
// }


// interface bus {
//     make: string,
//     model: string,
//     seatingCapacity: number
// }

// type vehicle = Car | bus;

// let car: vehicle = {
//     make: "Honda", model: "A2020"
// }

// let bus: vehicle = {
//     make: "TATA", model: "A2020", seatingCapacity: 40 

// }

// let arr :vehicle[]=[car,bus];

// arr.forEach(ele=>{
//     if("seatingCapacity" in ele)
//     {
//         console.log(`Company : ${ele.make}  and model :${ele.model} and seating  ${ele.seatingCapacity}`)
//     }
//     else
//     console.log(`Company : ${ele.make}  and model :${ele.model}`)
//})




//Class
//migration from function to opps paradigm
// 1)  data security 
// 2) portability
// 3) modularity
// what is the diffrence between function and  procedure
//what is class
//what are object
// which is more important class or object // both is important
// how make object make from a class
// if the two object have same value for each data member ..  they are same ? // ans - no memory is same 
// what is the roll of constructor

// class point
// {
//    private x:number;
//     y:number;
   
//     constructor(x:number,y:number)
//     {
//         this.x=x;
//         this.y=y;
//     }
//     draw():void{
//         console.log(`This is the Point X: ${this.x} Y: ${this.y}`)
//     }
// }

// let obj=new point(10,20);
// console.log(obj.x)
// obj.draw();

//---------------------------------------------------------------------------------------------------------------

//geter Setter function in clss

// class Student
// {
//     fname:string;
    
//     setName(n:String):void{
//         this.fname=n;
//     }

//     getName():String{
//         return this.fname
//     }
// }

// let stu=new Student();
// stu.setName("Ranjeet");
// console.log(stu.getName);


// Standard way

// class Student
// {
//    private fname:string;
    
//     set name(n:String){
//         this.fname=n;
//     }

//     get name():String{
//         return this.fname
//     }
// }

// let stu=new Student();
// stu.name="Ranjeet";
// console.log(stu.name)


/// declaring and using data member throught constructor

// class Employee{
//     empName:string;
//     empId:number;
//     empDept:string;

//     constructor(n:string,id:number,dept:string)
//     {
//         this.empName=n;
//         this.empId=id;
//         this.empDept=dept;
//     }

//     display():void
//     {
//       console.log(`${this.empName}  ${this.empId}  ${this.empDept}`);
//     }
// }

// let emp=new Employee("Ranjee",222233344,"Google");
// emp.display();


// another way
// class Employee{

//     constructor(public empName:string,public empId:number,public empDept:string)
//     {
//         empName=empName;
//         empId=empId;
//         empDept=empDept;
//     }

//     display():void
//     {
//       console.log(`${this.empName}  ${this.empId}  ${this.empDept}`);
//     }
// }

// let emp=new Employee("Ranjeet",222233344,"Google");
// emp.display();


// Reopening difference between type and interface

// type vehicle={
//     make:string,
//     model:string,
//     Transmission:string
// }
//  //we cannot add property in it with vehicle.color . we have to add manually
// let Car:vehicle={
//     make:"Audi",
//     model:"520D",
//     Transmission:"Automatic"
// }


// in which can do this thing
// interface vehicle{
//     make:string,
//     model:string,
//     Transmission:string
// }

// let Car:vehicle={
//     make:"Audi",
//     model:"520D",
//     Transmission:"Automatic",
//     color:"White",
// }

// //with help of

// interface vehicle{
//     color:string
// }


// Module









