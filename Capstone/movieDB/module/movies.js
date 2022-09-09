const moviesDiv = document.querySelector('.movies')

import{getMovies} from "./api.js";
import{config} from "./config.js";

export async function renderMovies(){
    const movies = await getMovies()
    console.log(movies)
    moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}

function renderSingleMovie(movie){
    return(
        <div class="col-4 col-lg-3 col-xl-2 p-1">
        <img src="${config.image_base_url + movie?.poster_path}" class="img-fluid" ></img>
        </div>
    )
}