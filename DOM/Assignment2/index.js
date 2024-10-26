
//All col of inputs
// TASK 01
const checkInput= (e)=>{
    if(e.target.value=="")
    {
        e.target.insertAdjacentElement("afterend",`<span class="text-danger></span>`)
    }
}




var  clas=document.getElementsByClassName('col');
var id=document.getElementById('username');
id.setAttribute('required',true);
let label1=document.createElement('label');
label1.innerHTML="UserName :";
label1.setAttribute("for","username");
clas[0].insertAdjacentElement("beforebegin",label1)




var ps=document.getElementById('password');
ps.setAttribute('required',true);
console.log(password)
let label2=document.createElement('label');
label2.innerHTML="Password :";
label2.setAttribute("for","password");
clas[1].insertAdjacentElement("afterbegin",label2)


var cps=document.getElementById('confirmPassword');
cps.setAttribute('required',true);
let label3=document.createElement('label');
label3.innerHTML="Confirm Password :";
label3.setAttribute("for","confirmPassword");
clas[2].insertAdjacentElement("afterbegin",label3)

var btn=document.querySelector('button');
btn.disabled=true;

function checkpassword()
{
    var Cpassword=cps.value.trim("") ;
    var password=ps.value.trim("") ;
    if(password!="" && Cpassword!="" && password===Cpassword)
        {
            btn.disabled=false;
        }
        else{
            btn.disabled=true;
        }
}

ps.addEventListener('input',checkpassword);
cps.addEventListener('input',checkpassword);

btn.addEventListener('click',()=>{
    var msg=document.createElement('h1');
    msg.innerHTML="User Succesfully register";
    let head=document.querySelector('h1');
    head.insertAdjacentElement("afterbegin",msg);
})


// Regular expression.