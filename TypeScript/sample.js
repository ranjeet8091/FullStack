//----------------------------------------------------------------
//data type  
// number,String 
// let a:number=10.987575757  ;
// let firstname:string='Ranjeet' ;
// let b:string=`welcome ${firstname}v to chitkara`
// console.log(b);
function draw(point) {
    console.log("Drawing point at (".concat(point.x, ", ").concat(point.y, ")"));
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
