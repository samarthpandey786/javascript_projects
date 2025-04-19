const api_key = "19214a8ae197d039e5124299deac95f8";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_box = document.querySelector(".search input")
const search_btn = document.querySelector("#search-btn")
const weather_icon = document.querySelector(".weather-icon")
const weather_descp = document.querySelector("#description")

async function check_Weather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }

    else{
        var data = await response.json();

        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    
        if(data.weather[0].main == "Clouds"){
            weather_icon.src = "images/clouds.png"
            weather_descp.innerHTML = data.weather[0].description
        }
        else if (data.weather[0].main == "Clear"){
            weather_icon.src = "images/clear.png"
            weather_descp.innerHTML = data.weather[0].description
        }
        else if (data.weather[0].main == "Rain"){
            weather_icon.src = "images/rain.png"
            weather_descp.innerHTML = data.weather[0].description
        }
        else if (data.weather[0].main == "Drizzle"){
            weather_icon.src = "images/drizzle.png"
            weather_descp.innerHTML = data.weather[0].description
        }
        else if (data.weather[0].main == "Mist"){
            weather_icon.src = "images/mist.png"
            weather_descp.innerHTML = data.weather[0].description
        }
    
       const display =  document.querySelector(".weather")
       display.style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

search_btn.addEventListener("click" , ()=>{
    check_Weather(search_box.value);
})
