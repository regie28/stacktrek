/*This is for my JS*/

const menu = ['Home', 'Movies', 'TV Shows', 'Join', 'Sign In'];

ul = document.createElement('ul');

document.querySelector('ul').appendChild(ul);

menu.forEach(item => {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML = item;
})