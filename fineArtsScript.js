/* 0.5 */
var c600 = document.getElementById('600');
var c639 = document.getElementById('639');
var c642 = document.getElementById('642');
var c648 = document.getElementById('648');
var c653 = document.getElementById('653');
var c510 = document.getElementById('510');
var c511 = document.getElementById('511');
var c510 = document.getElementById('510');
var c526 = document.getElementById('526');
var c518 = document.getElementById('518');
var c529 = document.getElementById('529');
var c530 = document.getElementById('530');
var c540 = document.getElementById('540');
var c547 = document.getElementById('547');
var c525 = document.getElementById('525');
var c546 = document.getElementById('546');
var cMUSI1011 = document.getElementById('MUSI1011');
var cMUSI1012 = document.getElementById('MUSI1012');
var cMUSI1003 = document.getElementById('MUSI1003');

/* 1 */
var c654 = document.getElementById('654');
var c654 = document.getElementById('654');
var c630 = document.getElementById('630');
var c638 = document.getElementById('638');
var c654 = document.getElementById('654');
var c598 = document.getElementById('598');
var c510 = document.getElementById('510');
var c511 = document.getElementById('511');
var c529 = document.getElementById('529');


/* CHECK BOXES */
var checkHalf = document.getElementById('check1');
var checkFull = document.getElementById('check2');

function halfCredit() {
    if (checkHalf.checked == true) {
        c654.style.display = "none";
    }
    else {
        c654.style.display = "block";
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