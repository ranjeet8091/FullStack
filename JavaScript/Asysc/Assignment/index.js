const timeDisplay = document.querySelector('#timeDisplay')
const startB = document.querySelector("#startBtn");
const pauseB = document.querySelector("#pauseBtn");
const resetB = document.querySelector("#resetBtn");
const lapB = document.querySelector("#lapBtn");
let containlap=document.querySelector('#output');

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId = null;
let hrs = 0;
let mins = 0;
let secs = 0;
let arr=[];
let count=1;

function updateTime() {
    elapsedTime = Date.now() - startTime;
    console.log(elapsedTime);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    secs=pad(secs);
    mins=pad(mins);
   hrs=pad(hrs)

    timeDisplay.textContent = `${hrs} : ${mins} : ${secs}`
}

function pad(units)
{
    return ("0" +units).length >2 ? units:"0"+units;
}

startB.addEventListener('click', () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }

})

pauseB.addEventListener('click', () => {
    if (!paused) {
        paused = true;
        clearInterval(intervalId);
    }
})

resetB.addEventListener('click', () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent=" 00: 00: 00";

    lapB.removeAttribute('disabled','disabled');
    // arr=[];
    containlap.innerHTML=" ";
    localStorage.removeItem('name');
    count = 1;

})

lapB.addEventListener('click', () => {
    if (!paused) {
        // // paused = false;
        // clearInterval(intervalId);
        lapB.removeAttribute('disabled')
    
       if(count<=3)
       {
        let time=timeDisplay.textContent
        containlap.insertAdjacentHTML("beforeend",`<div class=>Lap ${count} :${time}</div>`)
        count++;
        arr.push(time);
       localStorage.setItem('name',JSON.stringify(arr));
       }
       else
       {
        lapB.setAttribute('disabled','disabled')
        alert("Maximum number of lap exceed")
       }
                                                                                   
    }


    
})


window.addEventListener('load',()=>{
    let result=localStorage.getItem('name');
    result=JSON.parse(result);
    console.log(result)

    result.forEach((element,index,arr) => {
        containlap.insertAdjacentHTML("beforeend",`<div>Lap ${index+1} :${element}</div>`)
        
    });

})
