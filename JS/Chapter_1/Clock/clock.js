today = new Date()
week = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]
month = ["January", "February", "March", "April", "May","June", "July", "August","September","October","November","December"]
thisMonth = "<br>" + month[today.getMonth()] + " " + today.getDate() + "<br>" + "<br>";

if(today.getHours() % 12 > 0) {
    hour = today.getHours() % 12;
    format = "PM";
} else {
    hour = d.getHours();
    format = "AM";
}
minutes = today.getMinutes();
seconds = today.getSeconds();

if(hour < 10) hour = "0" + hour;
if(minutes < 10) minutes = "0" + minutes;
if(seconds < 10) seconds = "0" + seconds;

time = hour + ":" + minutes + ":" + seconds + ":" + format + "<br>";
d ="<br>" + week[today.getDay()];
document.getElementById("month").innerHTML = thisMonth
document.getElementById("time").innerHTML = time
document.getElementById("day").innerHTML = d
