const form = document.getElementById('new-scheme')
const seedColorEl = document.getElementById('seed-color')
const modeEl = document.getElementById('mode')
const colors = document.getElementById('colors')

let colorArr = []

function renderColors() {
    let colorString = ''
    
    colorArr.forEach(function(color, index){
        index++
        colorString += `
            <div id="color-${index}" class="color-${index}">
                <div class="color" style="background-color : ${color.hex.value};"></div>
                <div class="color-code">${color.hex.value}</div>
            </div>`
        })
        colors.innerHTML = colorString
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const seedColor = seedColorEl.value.substring(1)
    const mode = modeEl.value

    const url = `https://www.thecolorapi.com/scheme?hex=${seedColor}&format=json&mode=${mode}&count=5`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            colorArr = data.colors
            renderColors()
        })
})
