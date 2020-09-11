
    if( 'serviceWorker' in navigator){
      window.addEventListener('load', function(){
    navigator.serviceWorker.register('serviceWorker.js')
    .then(function(data){
    console.log("service worker regitered",data);
    });
      });
    }

    let key = "c79af7cde2168ee59902247e99528914";

let user = document.querySelector(".user_location");
user.addEventListener("click",function(){

if("geolocation" in navigator){
navigator.geolocation.getCurrentPosition(setPosition, showerror);
}else{
  console.log("geolocation is not available");
}
function setPosition(position){
let lat = position.coords.latitude;
let long = position.coords.longitude;
getWheather(lat, long);
}
function showerror(error){
  console.log(error.message);
}
function getWheather(lat, long){
  let api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
  exclude=hourly,daily&appid=${key}
  `;
  fetch(api2)
    .then(function(response){
      let data = response.json();
      return data;
     console.log(data);
    }).then(function(data){
      let tempe = document.querySelector(".temperature");
      let desc = document.querySelector(".description");
      let locate = document.querySelector(".location");

      desc.innerHTML = data.current.weather[0].description;
      tempe.innerHTML = Math.floor(data.current.temp);
      locate.innerHTML = data.timezone;
      console.log(data);
    })
  }
})




  let submit = document.querySelector(".submit");

  submit.addEventListener("click", function(){
    let inputValue = document.querySelector(".cityName").value;

    let api3 = `https://api.openweathermap.org/data/2.5/weather?q={kenya}&appid=${key}`;

  fetch(api3).then(function(response){
    let data = response.json();
    return data;
   console.log(data);
  }).then(function(data){
    desc.innerHTML = data.current.weather[0].description;
    tempe.innerHTML = Math.floor(data.current.temp);
    locate.innerHTML = data.timezone;
    console.log(data);
  })
 
  })

 



