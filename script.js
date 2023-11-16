
document.addEventListener("DOMContentLoaded", () => {
    // Your code here
    const apiKey = "45e3c4ed2597da0a1001fa7894044c8d";
const url = "https://api.openweathermap.org/data/2.5/weather?";
let cityName = "New York";
const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const weatherIcon  = document.querySelector(".weather-icon");

checkWeather("New Delhi");





async function checkWeather( cityName){
       const response= await fetch(url+ `q=${cityName}`+`&appid=${apiKey}`+ "&units=metric");
       var data = await response.json();

       if(response.status== 404){
        document.querySelector("weather").style.display= "none";
       }
       else
       {console.log(data);
       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".wind").innerHTML = data.wind.speed+ "km/h";

        
        console.log(weatherIcon.src);
        
     if ( data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/clouds.png";
     } else
     if ( data.weather[0].main =="rain"){
        weatherIcon.src = "images/rain.png";
     } else
     if ( data.weather[0].main =="mist"|| data.weather[0].main =="Haze"){
        weatherIcon.src = "images/mist.png";
     }
     else  if ( data.weather[0].main =="clear"){
        weatherIcon.src = "images/clear.png";
     }
     else
     if ( data.weather[0].main =="drizzle"){
        weatherIcon.src = "images/drizzle.png";
     }
     

}

       
       
}


console.log(cityName);
console.log('hello');

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
  });


// const apiKey = "45e3c4ed2597da0a1001fa7894044c8d";
// const url = "https://api.openweathermap.org/data/2.5/weather?";
// let cityName = "New York";
// const searchBtn = document.querySelector(".search button");
// const searchBox = document.querySelector(".search input");





// async function checkWeather( cityName){
//        const response= await fetch(url+ `q=${cityName}`+`&appid=${apiKey}`+ "&units=metric");
//        var data = await response.json();

//        console.log(data);
//        document.querySelector(".city").innerHTML = data.name;
//        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//        document.querySelector(".wind").innerHTML = data.wind.speed+ "km/h";

       
       
// }
// // checkWeather(cityName);

// console.log(cityName);
// console.log('hello');

// searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
// })