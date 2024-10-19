const cryptoTop = document.getElementById('crypto-top')
const cryptoBottom = document.getElementById('crypto-bottom')
const timeEl = document.getElementById('time')
const weather = document.getElementById('weather')

// Display background image
try {
    const resBackground = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    if(!resBackground.ok){
        throw Error("Something went wrong")
    }
    const dataBackground = await resBackground.json()
    document.body.style.backgroundImage = `url(${dataBackground.urls.full})`
    document.getElementById("author").textContent = `By: ${dataBackground.user.name}`
} catch(err) {
    const url = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=85'
    document.body.style.backgroundImage = `url(${url})`
    document.getElementById("author").textContent = 'By: Sean O.'
    console.error(err)
}

// Display crypto data
try {
    const resCrypto = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    if (!resCrypto.ok) {
        throw Error("Crypto data not available")
    }
    const dataCrypto = await resCrypto.json()
    cryptoTop.innerHTML = `
        <img src=${dataCrypto.image.small} alt="">
        <p>${dataCrypto.id}</p>`

    cryptoBottom.innerHTML = `
        <p><i class="fa-solid fa-coins" style="color: #FFD43B;"></i> $${dataCrypto.market_data.current_price.usd}</p>
        <p><i class="fa-solid fa-up-long" style="color: #63E6BE;"></i> $${dataCrypto.market_data.high_24h.usd}</p>
        <p><i class="fa-solid fa-down-long" style="color: #fb6060;"></i> $${dataCrypto.market_data.low_24h.usd}</p>`
} catch(err) {
    console.error(err)
}

// Display time
setInterval(() => {
    const date = new Date()
    timeEl.innerText = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}, 1000);

// Display weather data
navigator.geolocation.getCurrentPosition(async position => {
    try {
        const resWeather = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        if (!resWeather.ok){
            throw Error("Weather data not available")
        }
        const dataWeather =  await resWeather.json()
        const iconUrl = `https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`
        const temp = Math.round(dataWeather.main.temp)
        weather.innerHTML = `
            <img src=${iconUrl} class="weather-icon">
            <p class="temp">${temp}º</p>
            <p class="city">${dataWeather.name}</p>`
    } catch(err) {
        console.error(err)
    }  
})