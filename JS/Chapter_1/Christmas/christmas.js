d = new Date()
christmasYear = d.getFullYear();

if(d.getMonth() == 11 && d.getDate() > 25) {
    christmasYear = christmasYear + 1;
}

christmasDate = new Date(christmasYear, 11, 25);
dayMilliseconds = 1000 * 60 * 60 * 24;
remainingDays = Math.ceil((christmasDate.getTime() - d.getTime())/ (dayMilliseconds));

christmasday = "Christmas" + "<br>" + "In" + " " + remainingDays + " " + "days"
document.getElementById("christmas").innerHTML = christmasday
