//Task 01
const ul = document.querySelector('#pro-plan .card-body .list-unstyled');
ul.insertAdjacentHTML("beforeend",'<li>24/7 Phone Support</li>');

//Task 02
 
const proPlan = document.querySelector('#pro-plan');
const basicPlan = document.querySelector('#basic-plan');
proPlan.style.order = 2;
basicPlan.style.order=1;

// Task 03
const btn= document.querySelector('button');
btn.style.backgroundColor="#007bff";
    btn.innerHTML="Buy Now";
    btn.style.color="white"


    //Task 04
    const proplan1 = document.querySelector('#pro-plan .card-body .list-unstyled .storage-amount');
    const basicPlan1 = document.querySelector('#basic-plan .storage-amount');  
    proplan1.innerText*=1.5;
   basicPlan1.innerText*=1.25;

   // Task 05
   
   // Task 5
const body = document.querySelector('body');

let input1 = document.createElement('input');

input1.setAttribute("type" ,"radio");
input1.setAttribute("id","yearly");
input1.setAttribute("name","plan");
input1.setAttribute("value","yearly");

const label1 = document.createElement('label');

label1.setAttribute("for","yearly");
label1.innerHTML = "Yearly";


body.prepend(label1);
label1.prepend(input1);



const input = document.createElement('input');
input.setAttribute("type" , "radio");
input.setAttribute("id","monthly");
input.setAttribute("name","plan");
input.setAttribute("value","monthly");
input.setAttribute("checked","checked");


const label = document.createElement('label');

label.setAttribute("for","monthly");
label.innerHTML = "Monthly";

body.prepend(label);
label.prepend(input);


function chkSelectRadio() {
    const selectedRadio = document.querySelector('input[name="plan"]:checked');
    let newSpan = Array.from(document.querySelectorAll(".pricing"));
    if (selectedRadio.value == "monthly") {
        // console.log(selectedRadio.value); 
        newSpan[0].innerHTML = "30 / month";
        newSpan[1].innerHTML = "10 / month";
    } else {
        newSpan[0].innerHTML = "300 / yearly";
        newSpan[1].innerHTML = "100 / yearly";
    }
}


document.querySelectorAll('input[name="plan"]').forEach(radio => {
    radio.addEventListener('change', chkSelectRadio);
});