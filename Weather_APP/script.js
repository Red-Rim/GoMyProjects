const apiKey = "012313999532bac92a64dabe322d2f40";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("weatherResult").innerHTML = `<p>${data.message}</p>`;
            document.getElementById("weatherResult").style.display = "block";
            return;
        }

        const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <img src="${weatherIcon}" alt="Weather Icon" class="weather-icon">
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        `;

        document.getElementById("weatherResult").style.display = "block";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherResult").innerHTML = `<p>Failed to fetch weather data. Try again later.</p>`;
        document.getElementById("weatherResult").style.display = "block";
    }
}