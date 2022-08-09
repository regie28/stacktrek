let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let c = document.querySelector("#celsius");
    let f = document.querySelector("#fahrenheit");
    f.value = c.value * 9 / 5 + 32 + "\xB0F";
});

