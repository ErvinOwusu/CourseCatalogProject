/* FULL */
var c113 = document.getElementById('113 112 114');
var c123 = document.getElementById('123 122 124');
var c133 = document.getElementById('133 132 134');
var c138 = document.getElementById('138');
var c139 = document.getElementById('139');

/* HALF */
var c190 = document.getElementById('190 185');
var c162 = document.getElementById('162');
var c165 = document.getElementById('165');
var c169 = document.getElementById('169');
var c147 = document.getElementById('147');
var c187 = document.getElementById('187');
var c722 = document.getElementById('722');

var checkHalf = document.getElementById('check1');
var grid113 = document.getElementById('grid113');
var grid113 = document.getElementById('grid113');
var grid123 = document.getElementById('grid123');
var grid133 = document.getElementById('grid133');
var grid138 = document.getElementById('grid138');
var grid139 = document.getElementById('grid139');
var grid190 = document.getElementById('grid190');
var grid162 = document.getElementById('grid162');
var grid165 = document.getElementById('grid165');
var grid169 = document.getElementById('grid169');
var grid147 = document.getElementById('grid147');
var grid187 = document.getElementById('grid187');
var grid722 = document.getElementById('grid722');
/* 
* check1 = half
* check2 = full
*/

var title = document.getElementsByClassName('class-container');


function halfCredit() {
    if (check1.checked == true) {
        c113.style.display = "none";
        c123.style.display = "none";
        c133.style.display = "none";
        c138.style.display = "none";
        c139.style.display = "none";
    }
    else {
        c113.style.display = "block";
        c123.style.display = "block";
        c133.style.display = "block";
        c138.style.display = "block";
        c139.style.display = "block";
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

function display2() {
    if (check4.checked == true) {
        grid113.style.width = "32%";
        grid123.style.width = "32%";
        grid133.style.width = "32%";
        grid138.style.width = "32%";
        grid139.style.width = "32%";
        grid190.style.width = "32%";
        grid162.style.width = "32%";
        grid165.style.width = "32%";
        grid169.style.width = "32%";
        grid147.style.width = "32%";
        grid187.style.width = "32%";
        grid722.style.width = "32%";
    }
    else {
        grid113.style.width = "100%";
        grid123.style.width = "100%";
        grid133.style.width = "100%";
        grid138.style.width = "100%";
        grid139.style.width = "100%";
        grid190.style.width = "100%";
        grid162.style.width = "100%";
        grid165.style.width = "100%";
        grid169.style.width = "100%";
        grid147.style.width = "100%";
        grid187.style.width = "100%";
        grid722.style.width = "100%";
    }
}