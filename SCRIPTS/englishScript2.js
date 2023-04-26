function hideFreshman() {
    if (freshman.style.display == "none") {
        freshman.style.display = "block";
        freshman2.style.display = "block";
    }
    else {
        freshman.style.display = "none";
        freshman2.style.display = "none";
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

function hideSenior() {
    if (senior.style.display == "none") {
        senior.style.display = "block";
        senior2.style.display = "block";
    }
    else {
        senior.style.display = "none";
        senior2.style.display = "none";
    }
}

function hideElective() {
    if (elective.style.display == "none") {
        elective.style.display = "block";
        elective2.style.display = "block";
    }
    else {
        elective.style.display = "none";
        elective2.style.display = "none";
    }
}

var c1391 = document.getElementById('1391');
var c1392 = document.getElementById('1392');
var c140 = document.getElementById('140');
var c193 = document.getElementById('193');
var c138 = document.getElementById('138');
var c133 = document.getElementById('133');
var c123 = document.getElementById('123');
var c113 = document.getElementById('113');

var c190 = document.getElementById('190');
var c162 = document.getElementById('162');
var c165 = document.getElementById('165');
var c169 = document.getElementById('169');
var c147 = document.getElementById('147');
var c187 = document.getElementById('187');
var c722 = document.getElementById('722');


function halfCredit() {
    if (check1.checked == true) {
        c1391.style.display = "none";
        c1392.style.display = "none";
        c140.style.display = "none";
        c193.style.display = "none";
        c139.style.display = "none";
        c138.style.display = "none";
        c133.style.display = "none";
        c123.style.display = "none";
        c113.style.display = "none";
    }
    else {
        c1391.style.display = "block";
        c1392.style.display = "block";
        c140.style.display = "block";
        c193.style.display = "block";
        c139.style.display = "block";
        c138.style.display = "block";
        c133.style.display = "block";
        c123.style.display = "block";
        c113.style.display = "block";
    }
}

function fullCredit() {
    if (check2.checked == true) {
        c190.style.display = "none";
        c162.style.display = "none";
        c165.style.display = "none";
        c169.style.display = "none";
        c147.style.display = "none";
        c187.style.display = "none";
        c722.style.display = "none";
    }
    else {
        c190.style.display = "block";
        c162.style.display = "block";
        c165.style.display = "block";
        c169.style.display = "block";
        c147.style.display = "block";
        c187.style.display = "block";
        c722.style.display = "block";
    }
}
