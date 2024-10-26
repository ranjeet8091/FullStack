// const arr= ["Sandeep","ranjeet" ,"Sagar"]
// localStorage.setItem('name',JSON.stringify(arr))//if i set another data with same key this overwrite on previos


// //type of arr1 is string whwn we are using this with out json.stringify and json.parse
// const arr1=JSON.parse(localStorage.getItem('name'))
// console.log(arr1);

let sunakshiMarks=[30,29,40,35]
localStorage.setItem('arr',JSON.stringify(sunakshiMarks))

const localData=localStorage.getItem('arr')
console.log(localData)
// console.log(typeof(localData))

let localData1=JSON.parse(localData)
console.log(typeof(localData1))
localData1.forEach(element => {
    console.log(element)
    
});


// localStorage.setItem('sunakshi',JSON.stringify({name:"Sunakshi Sharma"}))