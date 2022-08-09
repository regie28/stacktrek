let btn = document.querySelector('.button');
let text = document.querySelector('.profile-details')

btn.addEventListener('click', function() {
    text.classList.toggle('profile-details');
});
