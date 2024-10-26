const btn=document.querySelector("#btn");
const source=document.querySelector("#source");
const destination=document.querySelector("#destination")
let result=document.querySelector("#result")



btn.addEventListener('click',(event)=>{
    event.preventDefault();
    const sourceA=source.value;
    const destiA=destination.value;

    fetch(`http://localhost:3000/flight/${sourceA}/${destiA}`)
    .then(response=>response.json())
    .then(data=>{
      result.innerHTML="";
      if(data.msg)
      {
        let h1=document.createElement("h1")
        h1.innerHTML=data.msg;
        console.log(h1)
        result.append(h1)
      }
      else
      {
        let div=document.createElement("div")
        div.innerHTML=`<h1>The flight between ${sourceA} and ${destiA}</h1>`
         data.forEach(element => {
            let row=document.createElement('div')
            row.innerHTML=`<h3> Flight Number is ${element.flight_id}</h3>`
            div.append(row) 
         });
         result.append(div)

      }
    })
    .catch(err=>{
        console.log(err)
    })


})