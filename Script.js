const APIKey = "c3d8e7f2513dd67d45c80051f29482bc";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Nairobi";

async function checkWeather() {
    const res = await fetch(apiUrl + `&appid=${APIKey}`);
    var data = res.json();

    console.log(data);
}

checkWeather();