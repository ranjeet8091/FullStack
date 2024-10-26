
const btn=document.querySelector("#btn");
const username=document.querySelector("#username");
const password=document.querySelector("#password");

btn.addEventListener("click",()=>{
    const usern=username.value;
    const passn=password.value;
 
    fetch("http://localhost:3000/checkCred", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: usern,pass:passn })
    })
    .then(response=>response.json())
    .then(data=>{
        if(data.msg)
        {
            alert(data.msg) 
        }
        else
        {
            alert(JSON.stringify(data));
        }
    })
    .catch(err=>{
        console.log(err)
    })
})