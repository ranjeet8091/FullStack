//Question 1
// class BankAccount{
//     private balance:number;
//     public AccountHolder :string;

//     constructor(Ah:string,ini:number)
//     {
//         this.balance=ini;
//         this.AccountHolder=Ah;
//     }
    
//     depost(amount:number):void{
//         this.balance+=amount;
//     }

//     withdraw(amount:number):void{
//         this.balance-=amount;
//     }

//     getBalance():number {
//         return this.balance;
//     }
// }

// const account=new BankAccount("Ranjeet",50000);

// account.depost(2000);
// account.withdraw(1000);
// console.log(`The Current balance is ${account.getBalance()}`)

// Question2 

// class Student{
//    private grades :number[];
//    public name :string;

//    constructor(name:string)
//    {
//     this.name=name;
//     this.grades=[];
//    }

//    addGrades(grade:number):void{
//       this.grades.push(grade);
//    }
//    AverageGrades():number{
//    const  sum:number= this.grades.reduce((prev:number,curr:number):number =>{
//              return prev+curr
//      },0)
//    const size:number=this.grades.length;
//    return sum/size;
//    }


// }

// const student=new Student("Ranjeet");
// student.addGrades(20);
// student.addGrades(30);
// student.addGrades(40);
// console.log(student.AverageGrades());

/// Questio  3

// interface Shape{
//     area():number
// }

// class Rectangle implements Shape{
//     private width:number;
//     private hieght:number;

//     constructor(width:number,height:number)
//     {
//         this.width=width;
//         this.hieght=height;
//     }

//     area(): number {
//         return this.width*this.hieght;
//     }

// }

// class Circle implements Shape{
//     private radius:number;

//     constructor(radius:number)
//     {
//         this.radius=radius;
//     }

//     area(): number {
//         return Math.PI*this.radius*this.radius;
//     }

// }

// const rec=new Rectangle(20,30);
// const cir=new Circle(20);

// console.log(`Area of Rectangle ${rec.area()}`)
// console.log(`Area of Circle ${cir.area().toFixed(2)}`)