var grid042 = document.getElementById('grid042');
var grid058 = document.getElementById('grid058');
var grid036 = document.getElementById('grid036');
var grid062 = document.getElementById('grid062');
var grid052 = document.getElementById('grid052');
var grid046 = document.getElementById('grid046');
var grid040 = document.getElementById('grid040');
var grid055 = document.getElementById('grid055');
var grid049 = document.getElementById('grid049');
var grid726 = document.getElementById('grid726');

var check4 = document.getElementById('check4');

function display2() {
    if (check4.checked == true) {
        grid042.style.width = "50%";
        grid058.style.width = "50%";
        grid036.style.width = "50%";
        grid062.style.width = "50%";
        grid052.style.width = "50%";
        grid046.style.width = "50%";
        grid040.style.width = "50%";
        grid055.style.width = "50%";
        grid049.style.width = "50%";
        grid726.style.width = "50%";
    }
    else {
        grid042.style.width = "100%";
        grid058.style.width = "100%";
        grid036.style.width = "100%";
        grid062.style.width = "100%";
        grid052.style.width = "100%";
        grid046.style.width = "100%";
        grid040.style.width = "100%";
        grid055.style.width = "100%";
        grid049.style.width = "100%";
        grid726.style.width = "100%";
    }
}