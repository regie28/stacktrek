let minuteRemaining = 10;
let time = minuteRemaining * 10;

let countDown = setInterval(function () {
  let min = Math.floor(time / 10);

  let sec = time % 10;

  sec = sec;

  if (min < 0 && sec < 0) {
    document.querySelector("#rocket").style = "display:block";
    clearInterval(countDown);
  } else {
    document.querySelector("#seconds").innerHTML = sec;
    document.querySelector("#minutes").innerHTML = min;
  }
  time--;
}, 800);
