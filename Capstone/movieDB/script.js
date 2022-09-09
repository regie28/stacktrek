/*This is for my JS*/

//API
const APIURL =
  "https://api.themoviedb.org/3/trending/all/week?api_key=8d3bafa2f418266dc7f81db3bb247722";
  //"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8d3bafa2f418266dc7f81db3bb247722&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/multi?&api_key=8d3bafa2f418266dc7f81db3bb247722&query=";

//Nav bar
const menu = ['Home', 'Movies', 'TV Shows', 'Join', 'Sign In'];

ul = document.createElement('ul');

document.querySelector('ul').appendChild(ul);

menu.forEach(item => {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML = item;
})

const main = document.querySelector('.main')
const search = document.querySelector('.search')
const text = document.querySelector('.form')

const getMovies = async (url) => {
    const resp = await fetch(url);
    const respData = await resp.json();

    showmovies(respData.results);
};

const showmovies = (movies) => {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;

        const moviesDiv = document.createElement("div")
            moviesDiv.classList.add("movie");

            moviesDiv.innerHTML = `
            <img 
                src = "${IMGPATH + poster_path}"
                alt="${title}"
                />
                <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview:</h3>
            ${overview}
            <div>`;
            main.appendChild(moviesDiv);
    });
};

getMovies(APIURL);

const getClassByRate = (vote) => {
    if (vote >= 6) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };
  
  text.addEventListener('submit', (e) => {
    e.preventDefault();

  const searchTerm = search.value;
  
    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
      search.value = "";
    }
  });