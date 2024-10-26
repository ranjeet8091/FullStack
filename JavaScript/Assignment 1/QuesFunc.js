// Function
//---------------------------------------------------------------------------------------------
//Question 1  double the element of the array
// const arr=[1,2,3,4,5,6];

//  function double(arr)
//  {
//     for(let i=0;i<arr.length;i++)
//         {
//            arr[i]=arr[i]*2;
//         }

//     for(let i=0;i<arr.length;i++)
//         {
//          console.log(arr[i]);
//          }
//  }
//  double(arr);

//-------------------------------------------------------------------------------------------------


//   Question 4   Two array are Equal or not
// const arr1=[2,4,7,5,9,1]
// const arr2=[1,2,3,4,5,6,7,8,9];
// function compare(ar1,ar2)
// {
//    let l1=ar1.length;
//    let l2=ar2.length
//    if(l1==l2)
//    { 
//     let count=0;
//     for(let i=0;i<l1;i++)
//     {
//         if(ar1[i]!=ar2[i])
//         {
//             count++;
//         }
//     }

//     if(count!=0)
//         console.log("not same");
//     else
//     console.log("Same");

//    }
//    else if(l1>l2)
//    {
//     console.log("Greater than");
//    }
//    else
//    console.log("Lesser than")
// } 
// compare(arr1,arr2);

//--------------------------------------------------------------------------------------------------------

// Question 2 // fibonacci series

// const arr=[0,1];
// function  fibonacci(ar)
// {
//     let l=ar.length;

//     //console.log(l)

//     if(ar[l-1]>=13)
//         return;
//    else{
//     ar[l]=ar[l-1]+ar[l-2];
//    fibonacci(ar);
//    }
// }
// fibonacci(arr)
// console.log(arr)

//---------------------------------------------------------------------------------------------------------

// Question 3

// const arr=[1,2,3,4,5,6,7,8,9]
// function mainf(ar,fun)
// {
//     fun(arr);
// }

// mainf(arr,double)

// function double(arr)
//  {
//     for(let i=0;i<arr.length;i++)
//         {
//            arr[i]=arr[i]*2;
//         }
//         for(let i=0;i<arr.length;i++)
//         {
//                console.log(arr[i]);
//         }
//  }

//-------------------------------------------------------------------------------------------------------

// Question 5

// let number=1234
// function reverse(num)
// {
//    let result=0;
//      while(num>0)
//      {
//        let digit=num%10;
//        result=digit+result*10;
//        num=Math.floor(num/10);
//      }
//      console.log(result)
// }
// reverse(number)

//-------------------------------------------------------------------------------------------------------

///Unique character add in new array
// const arr=[];
// let k=0;
// const data ="Welcometochitkarauniversity";
// for(let i=0;i<data.length;i++)
// {
//     let count=0;
//    for(let j=0;j<arr.length;j++)
//    {
//      if(data[i]==arr[j])
//         count++;
//    }
//    if(count==0)
//     arr[k++]=data[i];
// }

// console.log(arr);

//---------------------------------------------------------------------------------------------

///largest word
// const wordBank="ranjeet tiwari RanjeetTiwari";
// let words=wordBank.split(" "); // it returns a array
// console.log(words);
// let largest=0;
// let index;
// for( let i=0;i<words.length;i++)
// {
//    if(words[i].length>largest)
//    {
//     largest=words[i].length;
//     index=i;
//    }
// }
// console.log(words.join(" ")); /// return a string
// console.log("Largest word " + words[index])

//---------------------------------------------------------------------------------------------------

// Checking is Array or not 
// const arr=[1,2,3,1,[1,2,3,4,[1,2,3,4,55]]]
// const result=Array.isArray(arr[4]);
// console.log(result)

//--------------------------------------------------------------------------------------------
// Iterators

// 1) Filter
// const arr=[1,23,4,5,98,23,65]
// const newarr=arr.filter((e)=>{
//   if(e%2==0)
//   {
//     return true
//   }

// })
// console.log(newarr)

// // 2) Reduce

// const arr=[1,23,4,5,98,23,65]
// const max=arr.reduce((prev,curr,currIndex,arr)=>{
//      if(curr>prev)
//       prev=curr
//      return prev
// },0)
// console.log(max)

//---------------------------------------------------------------------------------------------------

//use map for this and split
// const arr = [
//     {
//         name: "sandeep rana",
//         age: 42
//     },
//     {
//         name: "Ranjeet Tiwari",
//         age: 42
//     },
// ]
//  const names=arr.map(n=>{
//     return n.name
//  })
//  console.log(names.join(", "));


//-----------------------------------------------------------------------------------------------------------

// object //

// const obj=new Object(); // can be create object like this
// const obj1={
//    name:"ranjeet",
//    age:22
// }

// const obj2={};
// obj2.name="Ranjeet";
// obj2.name="Sagar";

// delete obj2.name;
// console.log(obj2.name) // it gives undefined beacuse obj2.name is delete
////..................................

// const obj3 = {
//     "First Name": "Sandeep",
//     "10th_Marks": 78,
//     display_marks: () => {
//         console.log(`${obj3["First Name"]} has ${obj3["10th_Marks"]}`)
//     }
// }
// obj3.display_marks; /// 

// const obj4 = {
//     "first Name": "Ranjeet",
//     "!0th marks": 68,
//     display_marks: obj3.display_marks()
// }


//-----------------------------------------------------------------------------------------


// function show() {
//     console.log(`${this["First Name"]} has ${this["10th_Marks"]}`)
// }

// const obj3 = {
//     "First Name": "Sandeep",
//     "10th_Marks": 78,
//     display_marks: show
// }



// const obj4 = {
//     "First Name": "Ranjeet",
//     "10th_Marks": 68,
//     display_marks: show
// }
// obj3.display_marks();
// obj4.display_marks();

//console.log(obj4.hasOwnProperty("fisrt name"))

//---------------------------------------------------------------------------------------------------------

// Question return which contains firstName first letter and SecondName first letter for all object
// const arr=[
//      {
//         name:"Sandeep Rana",
//         age:42
//      },
//      {
//         name:"Rohit Sharma",
//         age:34
//      },
//      {
//         name:"Ranjeet Tiwari",
//         age:22
//      }
// ]

// const newarr=arr.map((ele)=>{
//     return(ele.name.split(" ")[0][0] + ele.name.split(" ")[1][0] )
// })
// console.log(newarr);

//----------------------------------------------------------------------------------------------------------


//Question to check the array is present in this array or not
// const nestarr=[1,2,[3,9],[5,[10,11]]]
// function getIndex(arr,val)
// {
//   for(let i=0;i<arr.length;i++)
//   {
//     if((Array.isArray(arr[i])) && (JSON.stringify(arr[i])==(JSON.stringify(val))))
//     {
//        return i;
//     }
//   }
//   return -1;
// }
// console.log(getIndex(nestarr,[3,9]))

//--------------------------------------------------------------------------------------------------------

// const categories = [{
//   id: "C1",
//   categoryName: "Platters",
//   superCategory: {
//     superCategoryName: "South Indian",
//     id: "SC1"
//   }
// }];

// const menu = [
//   {
//     id: "item1",
//     itemName: "Butter Roti",
//     rate: 20,
//     taxes:
//       [
//         {
//           name: "Service Charge",
//           rate: 10,
//           isInPercent: false
//         },
//         {
//           name: "GST",
//           rate: 5,
//           isInPercent: true
//         }
//       ],
//     category:
//     {
//       categoryId: "C2"
//     }
//   },
//   {
//     id: "item2",
//     itemName: "kadhai Panner",
//     rate: 20,
//     taxes:
//       [
//         {
//           name: "Service Charge",
//           rate: 10,
//           isInPercent: false
//         },
//         {
//           name: "GST",
//           rate: 5,
//           isInPercent: true
//         }
//       ],
//     category:
//     {
//       categoryId: "C2"
//     }
//   },
//   {
//     id: "item3",
//     itemName: "chur chur naan",
//     rate: 20,
//     taxes:
//       [
//         {
//           name: "Service Charge",
//           rate: 10,
//           isInPercent: false
//         },
//         {
//           name: "GST",
//           rate: 5,
//           isInPercent: true
//         }
//       ],
//     category:
//     {
//       categoryId: "C2"
//     }
//   }

// ];


// bill = {
//   id: "B1",
//   billNumber: 1,
//   opentime: "06 Nov 2020 14:19",
//   customerName: "CodeQuotient",
//   billItems: [
//     {
//       id: "item2",
//       quantity: 3,
//       discount: {
//         rate: 10,
//         isInPercent: true
//       }
//     },
//     {
//       id: "item3",
//       quantity: 5,
//       discount: {
//         rate: 10,
//         isInPercent: false
//       }
//     },
//   ]
// };

// calculate(bill);

// function calculate(bill) {
//   let totalAmount = 0;
//   const billdetail = [];
//   for (const billItem of bill.billItems)
//     {
//    const menuItem = menu.filter(v => v.id === billItem.id)[0];

//     if (menuItem)
//       {
//       let itemTotal = menuItem.rate * billItem.quantity;
//       let discount = billItem.discount.rate;
//       //discount
//       if (billItem.discount.isInPercent) {
//         itemTotal -= (itemTotal * discount / 100);
//       }
//       else {
//         itemTotal -= discount;
//       }
//       //tax
//       for(const tax of menuItem.taxes)
//       {
//         if(tax.isInPercent)
//         {
//           itemTotal+=(menuItem.rate*tax.rate/100)
//         }
//         else
//         {
//           itemTotal+=tax.rate;
//         }
//       }

//      //detail add
//      totalAmount+=itemTotal;
//      billdetail.push({
//       itemname:menuItem.itemName,
//       Quantity:billItem.quantity,
//       itemTotal:itemTotal,
//       rate:menuItem.rate
//      })

//     }
//   }
//   console.log(totalAmount)
//     for(let i of billdetail)
//     {
//       console.log(`${i.itemname} @ ${i.rate} * ${i.Quantity} = ${i.itemTotal}`)
//     }
// }




