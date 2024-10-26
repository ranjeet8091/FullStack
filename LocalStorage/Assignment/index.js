const task=document.querySelector("#task");
const btn=document.querySelector("#btn");
const output=document.querySelector("#output"); /// iska use karenge hum task add karne ke liy or page pai dikhane ke liy

btn.addEventListener('click',()=>{
    let value=task.value

    const div=document.createElement("div")// sari chije isme dal ke output ke sath append kar denge
    const span=document.createElement("span")
    span.innerHTML=value;
    const checkbox=document.createElement("input");
    checkbox.setAttribute('type','checkbox');

    const delete1=document.createElement("button");
   delete1.innerHTML="❌"
   delete1.style.margin="2px"

    div.append(span);
    div.appendChild(checkbox);
    div.append(delete1)

    output.append(div)

    // css on div
    div.style.width="100%";
    div.style.height="20px";
    div.style.backgroundColor="green";
    div.style.border="2px solid black"
    div.style.padding="10px";
    div.style.margin="10px";

   checkbox.addEventListener("click",()=>{
     div.style.backgroundColor="pink";
     span.style.textDecoration="line-through";
   })

   delete1.addEventListener("click",()=>{
    div.innerHTML=""
   })
    
    
})