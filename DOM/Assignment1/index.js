
const p = document.querySelector('p');
//task 1
    let words = p.innerText.split(" ");
    let newHTML = words.map((e)=>{
        if(e.length > 8){
            return `<span style="background-color: yellow;" >${e}</span>`;
        } else {
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
const count=p.innerText.split(" ").length

const head=document.querySelector('h1');

const h2=document.createElement('h2');
h2.innerText=count;
head.append(h2)

//second method
// head.insertAdjacentHTML('afterEnd',`<span>${count}</span>`)




///task 5
var newhtm=p.innerHTML.split("")


const newchar=newhtm.map((e)=>{
    if(e=='?')
   {
     return  `<span  >🤔</span>`;
   }
   else if(e=='!')
    return `<span  >😲</span>`

   else{
   return e
   }

}).join("")
p.innerHTML=newchar


//alernate of this 
// p.innerHTML = p.innerHTML.replace(/\?/g, '😀').replace(/!/g, '😲');
// we can also use replaceAll 







//more than one element 
// in the case of querySelectorAll
// use Array.from()
// to convert in array