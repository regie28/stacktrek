let btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  let c = document.querySelector('#celsius');
  let f = document.querySelector('#fahrenheit');
  f.value = (c.value * 9) / 5 + 32 + '\xB0F';
});
/*
document.querySelector('button').onclick = function () {
  let c = document.querySelector('celsius');
  let f = (c.value * 9) / 5 + 32 + '\xB0F';
  let degrees = f.value + '\xB0F';
  if (c > 0) {
    return degrees;
  } else {
    return f.value;
  }
  document.querySelector('fahrenheit').innerHTML = degrees;
};*/
