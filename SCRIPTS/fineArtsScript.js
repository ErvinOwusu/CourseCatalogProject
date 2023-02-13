/* 0.5 */
var c600 = document.getElementById('c600');
var c639 = document.getElementById('c639');
var c642 = document.getElementById('c642');
var c648 = document.getElementById('c648');
var c653 = document.getElementById('c653');
var c510 = document.getElementById('c510');
var c511 = document.getElementById('c511');
var c510 = document.getElementById('c510');
var c526 = document.getElementById('c526');
var c518 = document.getElementById('c518');
var c529 = document.getElementById('c529');
var c530 = document.getElementById('c530');
var c540 = document.getElementById('c540');
var c547 = document.getElementById('c547');
var c525 = document.getElementById('c525');
var c546 = document.getElementById('c546');
var MUSI1011 = document.getElementById('MUSI1011');
var MUSI1012 = document.getElementById('MUSI1012');
var MUSI1003 = document.getElementById('MUSI1003');

/* 1 */
var c654 = document.getElementById('c654');
var c630 = document.getElementById('c630');
var c638 = document.getElementById('c638');
var c654 = document.getElementById('c654');
var c598 = document.getElementById('c598');
var c510 = document.getElementById('c510');
var c511 = document.getElementById('c511');
var c529 = document.getElementById('c529');


/* CHECK BOXES */
var checkHalf = document.getElementById('check1');
var checkFull = document.getElementById('check2');

function halfCredit() {
    if (checkHalf.checked == true) {
        c654.style.display = "none";
        c630.style.display = "none";
        c638.style.display = "none";
        c654.style.display = "none";
        c598.style.display = "none";
        c510.style.display = "none";
        c511.style.display = "none";
        c529.style.display = "none";
    }
    else {
        c654.style.display = "block";
        c630.style.display = "block";
        c638.style.display = "block";
        c654.style.display = "block";
        c598.style.display = "block";
        c510.style.display = "block";
        c511.style.display = "block";
        c529.style.display = "block";
    }
}

function fullCredit() {
    if (checkFull.checked == true) {
        c600.style.display = "none";
        c639.style.display = "none";
        c642.style.display = "none";
        c648.style.display = "none";
        c653.style.display = "none";
        c510.style.display = "none";
        c511.style.display = "none";
        c510.style.display = "none";
        c526.style.display = "none";
        c518.style.display = "none";
        c529.style.display = "none";
        c530.style.display = "none";
        c540.style.display = "none";
        c547.style.display = "none";
        c525.style.display = "none";
        c546.style.display = "none";
        cMUSI1011.style.display = "none";
        cMUSI1012.style.display = "none";
        cMUSI1003.style.display = "none";
    }
    else {
        c600.style.display = "block";
        c639.style.display = "block";
         c642.style.display = "block";
         c648.style.display = "block";
         c653.style.display = "block";
         c510.style.display = "block";
         c511.style.display = "block";
         c510.style.display = "block";
         c526.style.display = "block";
         c518.style.display = "block";
         c529.style.display = "block";
         c530.style.display = "block";
         c540.style.display = "block";
         c547.style.display = "block";
         c525.style.display = "block";
         c546.style.display = "block";
         cMUSI1011.style.display = "block";
         cMUSI1012.style.display = "block";
         cMUSI1003.style.display = "block";
    }
}