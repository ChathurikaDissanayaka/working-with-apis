const cryptoTop = document.getElementById('crypto-top')
const cryptoBottom = document.getElementById('crypto-bottom')
const timeEl = document.getElementById('time')
const weather = document.getElementById('weather')

// Display background image
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => {
        if(!res.ok){
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
	.catch(err => {
        const url = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI2NzA5Mzg&ixlib=rb-1.2.1&q=85'
        document.body.style.backgroundImage = `url(${url})`
        document.getElementById("author").textContent = 'By: Sean O.'
        console.error(err)
    })

// Display crypto data
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Crypto data not available")
        }
        return res.json()
    })
    .then(data => {
		cryptoTop.innerHTML = `
			<img src=${data.image.small} alt="">
            <p>${data.id}</p>`

		cryptoBottom.innerHTML = `
				<p><i class="fa-solid fa-coins" style="color: #FFD43B;"></i> $${data.market_data.current_price.usd}</p>
                <p><i class="fa-solid fa-up-long" style="color: #63E6BE;"></i> $${data.market_data.high_24h.usd}</p>
                <p><i class="fa-solid fa-down-long" style="color: #fb6060;"></i> $${data.market_data.low_24h.usd}</p>`
    })
    .catch(err => console.error(err))

// Display time
setInterval(() => {
    const date = new Date()
    timeEl.innerText = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}, 1000);

// Display weather data
navigator.geolocation.getCurrentPosition((position) => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if(!res.ok){
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            const temp = Math.round(data.main.temp)
            weather.innerHTML = `
                <div class="weather-top">
                    <img src=${iconUrl} class="weather-icon">
                    <p class="temp">${temp}º</p>
                </div>
                <p class="city">${data.name}</p>`
        })
        .catch(err => console.error(err))
})