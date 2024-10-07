/**
 * Challenge part 1: GET the current weather for your city with 
 * the Open Weather API and log it to the console.
 * 
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/
 * Endpoint: /weather
 * Query: ??? (https://openweathermap.org/current)
    * NOTE: It says you need to include `appid` in your query, but you can skip that this time
    
    
Challenge part 2: change the units into something that makes more sense to you
than Kelvin 😂
 */

fetch('https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=7.29&lon=80.63&units=metric')
.then(res =>res.json())
.then(data => console.log(data))
    
/*
{
    "coord": {
        "lon": 80.63,
        "lat": 7.29
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 20.72,
        "feels_like": 21.41,
        "temp_min": 20.72,
        "temp_max": 20.72,
        "pressure": 1014,
        "humidity": 98,
        "sea_level": 1014,
        "grnd_level": 939
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.23,
        "deg": 259,
        "gust": 1.79
    },
    "clouds": {
        "all": 100
    },
    "dt": 1728325381,
    "sys": {
        "country": "LK",
        "sunrise": 1728260678,
        "sunset": 1728303939
    },
    "timezone": 19800,
    "id": 1241622,
    "name": "Kandy",
    "cod": 200
}
*/