const mainEl = document.getElementById('main')

fetch('http://www.omdbapi.com/?apikey=28ebe08c&t=minions&type=movie')
.then(response => response.json())
.then(data  => {
    console.log(data)

    let rating = ''
    if(data.Ratings.length){
        rating = data.Ratings[0].Value.split('/')[0]
    } else{
        rating = 'N/A'
    }
    
    mainEl.innerHTML = `
    <div class="movie">
            <img src=${data.Poster} alt="movie poster">
            <div class="overview">
                <div class="title">
                    <h4 class="mv-title">${data.Title}</h4>
                    <p class="rating"><i class="fa-solid fa-star" style="color: #FFD43B;"></i> ${rating}</p>
                </div>
                <div class="details">
                    <p class="runtime">${data.Runtime}</p>
                    <p class="genre">${data.Genre}</p>
                    <button><i class="fa-solid fa-circle-plus"></i> Watchlist</button>
                </div>
                <p class="plot">${data.Plot}</p>
            </div>
        </div>`  
})