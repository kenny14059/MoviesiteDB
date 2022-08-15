const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const section = document.querySelector('.section');

getMovies(API_URL);

 async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
     showMovies(data.results);
 }

function showMovies(data) {
   section.innerHTML ='';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie'); 
        movieEl.innerHTML = `
        <img src="${ poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580"}" alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class='${getColor(vote_average)}'>${vote_average}</span>
        </div>
          `
       section.appendChild(movieEl);

    })
}

/*rating color changer*/
function getColor(vote) {
    if(vote>= 7.5){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}
