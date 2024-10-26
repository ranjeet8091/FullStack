 async function players()
{
   let data=await fetch("players.json");
   let json=await data.json();
   //console.log(json);

   const container=document.querySelector("#container");
     
   json.forEach(element => {
  let div=document.createElement("div");
  div.innerHTML=`
   <h3>${element.name}</h3>
     <h2>${element.contry}</h2>
  `
  container.appendChild(div);
 
    
   });
}

players();