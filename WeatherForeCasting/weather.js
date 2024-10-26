const apiKey = "5357049454d4cbc45285a6f4902b213c";
const icon=document.querySelector(".icon").children[0];

const nam=document.querySelector(".name")
const temp=document.querySelector(".temp");
const desc=document.querySelector(".desc");
const details=document.querySelector(".details");
const feelLike=details.children[0];
const humidity=details.children[1];
const WindSpeed=details.children[2];



//when button is clicked
// function call() {
//     const city=document.querySelector("#city-name").value;
//       console.log(city);
      
//      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//      fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); 
//         nam.innerHTML=data.name;
//         temp.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
//         desc.innerHTML=`${data.weather[0].description}`
//         feelLike.innerHTML=`Feel like :${Math.round(data.main.feels_like-273.15)}°C`;
//         humidity.innerHTML=`Humidity :${data.main.humidity}%`
//         WindSpeed.innerHTML=`Wind Speed :${Math.round(data.wind.speed)}m/s`
//         icon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
//     })
//     .catch(err => {
//         console.log(err);
//     });

// }



// async await 



call();  /// for by default data 

 async function call(city)
{
   
    city=document.querySelector("#city-name").value;
    var url;
    if(city.trim()==="")
    {
        city="Nalagarh";
        url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    }
    else{
        url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    }
     
;
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    

    if(!res.ok)
    {
        alert("Location is not valid");
    }
    else{
       document.querySelector(".name").innerHTML=`${data.name}`;
        
       document.querySelector(".icon").children[0].src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
       document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp)}°C`;
       document.querySelector(".details").children[0].innerHTML=`Feel like :${Math.round(data.main.feels_like)}°C`;
       document.querySelector(".details").children[1].innerHTML=`Humidity :${data.main.humidity}%`;
       document.querySelector(".details").children[2].innerHTML=`Wind Speed :${Math.round(data.wind.speed)}m/s`;

    }

}



