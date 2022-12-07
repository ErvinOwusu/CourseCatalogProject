/* 0.5 */
var c600 = document.getElementById('600');
var c639 = document.getElementById('639');

/* 1 */
var c654 = document.getElementById('654');

/* CHECK BOXES */
var checkHalf = document.getElementById('check1');
var checkFull = document.getElementById('check2');

function halfCredit()
{
    if (checkHalf.checked == true)
    {
        c654.style.display = "none";
    }
    else
    {
        c654.style.display = "block";
    }
}

function fullCredit()
{
    if (checkFull.checked == true)
    {
        c600.style.display = "none";
        c639.style.display = "none";
    }
    else {
        c600.style.display = "block";
        c639.style.display = "block";
    }
}