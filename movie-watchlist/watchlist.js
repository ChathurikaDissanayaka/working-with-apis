const watchlistEl = document.getElementById('watch-list')
const removeEl = document.getElementById('remove-from-watchlist')

let movieArray = []

renderList()

document.addEventListener('click', (e)=>{
    if(e.target.dataset.item){
        movieArray.pop(e.target.dataset.item)
        localStorage.setItem('movies', JSON.stringify(movieArray))
        renderList()
    }
})

function renderList(){
    if(JSON.parse(localStorage.getItem('movies'))){
        movieArray = JSON.parse(localStorage.getItem('movies'))
    }

    if(movieArray.length){
    let htmlStr = ''

    movieArray.forEach((item, index) =>{
        let rating = ''

        if(item.Ratings.length != 0){
            rating = item.Ratings[0].Value.split('/')[0]
        } else{
            rating = 'N/A'
        }
        
        htmlStr +=  `
        <div class="movie">
            <img src=${item.Poster} alt="movie poster">
            <div class="overview">
                <div class="title">
                    <h4 class="mv-title">${item.Title}</h4>
                    <p class="rating"><i class="fa-solid fa-star" style="color: #FFD43B;"></i> ${rating}</p>
                </div>
                <div class="details">
                    <p class="runtime">${item.Runtime}</p>
                    <p class="genre">${item.Genre}</p>
                    <button id="remove-from-watchlist" data-item=${index}><i class="fa-solid fa-circle-minus"></i> Remove</button>
                </div>
                <p class="plot">${item.Plot}</p>
            </div>
        </div>`  
    })

    watchlistEl.innerHTML = htmlStr
    } else{
        watchlistEl.innerHTML = `
            <p class="dark-text">Your watchlist is looking a little empty...</p>
            <p class="content"><a href="index.html"><i class="fa-solid fa-circle-plus"></i></a> Let's add some movies!</p>`
    }

}