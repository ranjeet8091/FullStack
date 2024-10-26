const p = document.querySelector('p');
//task 1
    let words = p.innerText.split(" ");
    var count=0;
    let newHTML = words.map((e)=>{
        if(e.length > 8){
            count++;
            return `<span style="background-color: yellow;" >${e}</span>`;
        } else {
            count++;
            return e;
        }
    }).join(" ");
    
    p.innerHTML = newHTML;

//task 2    
const a=document.createElement('a');
console.log(typeof(a))
a.innerText="Link is created"
a.href="https://forcemipsum.com/"
document.body.appendChild(a)


//task 3
let newline = newHTML.split(".");
let newh = newline.map((e)=>{
      return `<p  >${e}</p>`;
    
})
p.innerHTML=newh

//task 4
const h2=document.createElement('h2');
h2.innerHTML=count
document.body.appendChild(h2)
console.log(count);



///task 5
var newhtm=p.innerHTML.split("")
console.log(newhtm)

const newchar=newhtm.map((e)=>{
    if(e=='?')
   {
     return  `<span  >🤔</span>`;
   }
   else if(e=='!')
    return `<span  >😲</span>`;

   else{
   return e
   }

}).join("")
p.innerHTML=newchar





