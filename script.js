document.getElementById('greetButton').onclick = function () {
    "use strict";
    var myHeading = document.querySelector('button');
    myHeading.style.display = "none";
    var h1 = document.createElement('h1');
    h1.className = "big";
    h1.id = "big";
    document.body.appendChild(h1);
    h1.appendChild(document.createTextNode("Я ВІТАЮ ТЕБЕ СВІТ!!!"));
    document.getElementsByTagName("h1")[0].style.color = "red";
    document.getElementById("big").style.fontSize = "4em";
    document.getElementById("big").style.textAlign = "center";
    document.getElementById('removeGreeting').style.display = 'inline';
}

document.getElementById('removeGreeting').onclick = function () {
    var h1 = document.getElementById('big');
    h1.parentNode.removeChild(h1);
    document.getElementById('greetButton').style.display = 'inline';
    this.style.display = 'none';
}
