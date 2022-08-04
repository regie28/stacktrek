let car = {
    manufacturer : "Mitsubishi",
    make : "Lancer",
    model : "Evolution I",
    engine : "1,3 2E",
    body_style : "Sedan"
    }
    details = "<br>" + "Manufacturer" + " " + ":" + " " + car.manufacturer + "<br>" + "Make and Model" + " " + ":" + " " + car.make + " " + car.model + "<br>" + "Engine" + " " + ":" + " " + " " + car.engine + "<br>" + "Body Type" +" " + ":" + " " + car.body_style
    document.getElementById("details").innerHTML = details