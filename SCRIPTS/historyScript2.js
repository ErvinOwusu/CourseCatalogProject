function hideFreshman() {
    if (freshman.style.display == "block") {
        freshman.style.display = "block";
        freshman2.style.display = "block";
    }
    else {
        freshman.style.display = "none";
        freshman2.style.display = "none";
    }
}


function hideElective2() {
    if (historyElective.style.display == "none") {
        historyElective.style.display = "block";
        historyElective2.style.display = "block";
    }
    else {
        historyElective.style.display = "none";
        historyElective2.style.display = "none";
    }
}

function hideJunior() {
    if (junior.style.display == "none") {
        junior.style.display = "block";
        junior2.style.display = "block";
    }
    else {
        junior.style.display = "none";
        junior2.style.display = "none";
    }
}

function hideSophomore() {
    if (sophomore.style.display == "none") {
        sophomore.style.display = "block";
        sophomore2.style.display = "block";
    }
    else {
        sophomore.style.display = "none";
        sophomore2.style.display = "none";
    }
}

var c040 = document.getElementById('040');
var c036 = document.getElementById('036');
var c058 = document.getElementById('058');
var c033 = document.getElementById('033');
var c023 = document.getElementById('023');
var c013 = document.getElementById('013');

var c045 = document.getElementById('045');
var c728 = document.getElementById('728');
var c044 = document.getElementById('044');
var c048 = document.getElementById('048');
var c726 = document.getElementById('726');
var c049 = document.getElementById('049');
var c055 = document.getElementById('055');
var c046 = document.getElementById('046');
var c062 = document.getElementById('062');
var c042 = document.getElementById('042');

function halfCredit() {
    if (check1.checked == true) {
        c040.style.display = "none";
        c036.style.display = "none";
        c058.style.display = "none";
        c033.style.display = "none";
        c023.style.display = "none";
        c013.style.display = "none";
    }
    else {
        c040.style.display = "block";
        c036.style.display = "block";
        c058.style.display = "block";
        c033.style.display = "block";
        c023.style.display = "block";
        c013.style.display = "block";
    }
}

function fullCredit() {
    if (check2.checked == true) {
        c045.style.display = "none";
        c728.style.display = "none";
        c044.style.display = "none";
        c048.style.display = "none";
        c726.style.display = "none";
        c049.style.display = "none";
        c055.style.display = "none";
        c046.style.display = "none";
        c062.style.display = "none";
        c042.style.display = "none";
    }
    else {
        c045.style.display = "block";
        c728.style.display = "block";
        c044.style.display = "block";
        c048.style.display = "block";
        c726.style.display = "block";
        c049.style.display = "block";
        c055.style.display = "block";
        c046.style.display = "block";
        c062.style.display = "block";
        c042.style.display = "block";
    }

}
