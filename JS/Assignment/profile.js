const info = {
    name: "Hi I'am Reginald",
    career: "Tech Staff : Aspiring Web Developer",
    hobbies: ["Playing Dota 2", "Reading Manga/Manhwa", "Watching Movies", "Watching Anime", "Playing Chess"],
    food: ["Adobo", "Chicken Curry", "Afritada", "Burger", "Pancit", "Lechon"],
    tvSeries : ["One Piece","Breaking Bad", "Futurama", "Dr.Stone", "Berserk", "Young Sheldon", "Family Guy", "The Boys", "The Walking Dead", "The Mentalist", "The Mandalorian", "Kimetsu No Yaiba", "The God of High School", "Hunter X Hunter", "The Bing Bang Theory"],
    movies: ["Green Mile", "Forest Gump", "Lord of The Rings", "The Hobbit", "Spirited Away", "Castle in The Sky", "Grave of Fireflies", "The Godfather", "Howl's Moving Castle"],
}

let displayMoreInfo = false

function infoList() {
    const name = document.querySelector('.name')
    const career = document.querySelector('.career')
    const hobbies = document.querySelector('.hobbies')
    const food = document.querySelector('.food')
    const tvSeries = document.querySelector('.tvSeries')
    const movies = document.querySelector('.movies')

    name.innerHTML = info.name
    career.innerHTML = info.career
    createList(hobbies, info.hobbies)
    createList(food, info.food)
    createList(tvSeries, info.tvSeries)
    createList(movies, info.movies)
}

function toggleInfo() {
    const hobbies = document.querySelector('.hobbies')
    const food = document.querySelector('.food')
    const tvSeries = document.querySelector('.tvSeries')
    const movies = document.querySelector('.movies')
    const card = document.querySelector('.row')

    displayMoreInfo = !displayMoreInfo
    setVisibility(displayMoreInfo, hobbies, food, tvSeries, movies, card)
    
}

function createList(elementList, list) {
    list.forEach(element => {
        let node = document.createElement("li")
        let textnode = document.createTextNode(element)
        node.appendChild(textnode)
        elementList.appendChild(node)
    })
}

function setVisibility(isVisible, ...element) {
    element.forEach(e => {
        e.style.display = (isVisible) ? "block" : "none"
    })
}
/*
let btn = document.querySelector('.button');
let card = document.querySelectorAll('.profile-details')

btn.addEventListener('click', function() {
    card.classList.toggle('profile-details');
});
*/

let minusButton = document.querySelector('.minus');
let plusButton = document.querySelector('.plus');
let numberPlace = document.querySelector('.numberPlacer');

let counter = 0;
numberPlace.innerHTML = counter;

minusButton.addEventListener('click', function() {
        counter--
        numberPlace.innerHTML = counter; 
    
})

plusButton.addEventListener('click', function() {
    counter++
    numberPlace.innerHTML = counter;
})
