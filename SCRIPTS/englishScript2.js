var c113 = document.getElementById('113 112 114');
var c123 = document.getElementById('123 122 124');


var checkHalf = document.getElementById('check1');

/* 
* check1 = half
* check2 = full
*/


function halfCredit() {
    if (check1.checked == true) {
        c113.style.display = "none";
        c123.style.display = "none";
    }
    else {
        c113.style.display = "block";
        c123.style.display = "block";
    }
}