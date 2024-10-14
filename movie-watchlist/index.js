const form = document.getElementById('form')
const movieNameEl = document.getElementById('movie-name')
const mainEl = document.getElementById('main')


let movies = []
let statusCode = ''

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const movieName = movieNameEl.value

    const url = `http://www.omdbapi.com/?apikey=28ebe08c&t=${movieName}&type=movie`

    fetch(url)
    .then(response => response.json())
    .then(data  => {
        movies.push(data)
        console.log(data)
        
        const {Poster, Title, Runtime, Genre, Plot} = data

        let rating = ''
        if(data.Ratings.length){
            rating = data.Ratings[0].Value.split('/')[0]
        } else{
            rating = 'N/A'
        }
        
        mainEl.innerHTML = `
        <div class="movie">
            <img src=${Poster} alt="movie poster">
            <div class="overview">
                <div class="title">
                    <h4 class="mv-title">${Title}</h4>
                    <p class="rating"><i class="fa-solid fa-star" style="color: #FFD43B;"></i> ${rating}</p>
                </div>
                <div class="details">
                    <p class="runtime">${Runtime}</p>
                    <p class="genre">${Genre}</p>
                    <button id="add-to-watchlist"><i class="fa-solid fa-circle-plus"></i> Watchlist</button>
                </div>
                <p class="plot">${Plot}</p>
            </div>
        </div>`  

        const addToWatchlist = document.getElementById('add-to-watchlist')
    
        addToWatchlist.addEventListener('click', ()=>{
            localStorage.setItem('movies', JSON.stringify(movies))
            form.reset()
            mainEl.innerHTML = `
            <i class="fa-solid fa-film"></i>
            <p>Start exploring</p>`
        })
    })
    .catch(error => {
        mainEl.innerHTML = `<p>Unable to find what you're looking for. Please try another search.</p>`
    })
})

