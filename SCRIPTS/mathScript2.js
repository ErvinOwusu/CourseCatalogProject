var mathCourse = document.getElementById('mathCourse');
var mathCourse2 = document.getElementById('mathCourse2');

var mathElectives = document.getElementById('mathElectives');
var mathElectives2 = document.getElementById('mathElectives2');

var indexContent = document.getElementById('index-content');
var indexStyle = document.getElementById('indexStyle');
var title = document.getElementById('math-index');

function hideMathCourses() {
    if (mathCourse.style.display == "none") {
        mathCourse.style.display = "block";
        mathCourse2.style.display = "block";
    }
    else {
        mathCourse.style.display = "none";
        mathCourse2.style.display = "none";
    }
}

function hideMathElectives() {
    if (mathElectives.style.display == "none")
    {
        mathElectives.style.display = "block";
        mathElectives2.style.display = "block";
    }
    else
    {
        mathElectives.style.display = "none";
        mathElectives2.style.display = "none";
    }
}

function mathIndex() {
    if (indexContent.style.display == "flex") {
        indexContent.style.display = "none";
        indexStyle.style.padding = "2px;"
        indexStyle.style.width = "20%";
    }
    else {
        indexContent.style.display = "flex";
        indexStyle.style.padding = "20px;"
        indexStyle.style.width = "80%"
    }
}


function halfCredit() {
    if (check1.checked == true) {
        grid210.style.display = "none";
        grid210.style.display = "none";
        grid212.style.display = "none";
        grid214.style.display = "none";
        grid220.style.display = "none";
        grid222.style.display = "none";
        grid224.style.display = "none";
        grid256.style.display = "none";
        grid252.style.display = "none";
        grid253.style.display = "none";
        grid232.style.display = "none";
        grid234.style.display = "none";
        grid242.style.display = "none";
        grid244.style.display = "none";
        grid255.style.display = "none";
        grid260.style.display = "none";
        grid238.style.display = "none";
        grid230.style.display = "none";
        grid700.style.display = "none";
        grid702.style.display = "none";
        gridMathLab.style.display = "none";
        grid251.style.display = "none";
    }
    else {
        grid210.style.display = "block";
        grid210.style.display = "block";
        grid212.style.display = "block";
        grid214.style.display = "block";
        grid220.style.display = "block";
        grid222.style.display = "block";
        grid224.style.display = "block";
        grid256.style.display = "block";
        grid252.style.display = "block";
        grid253.style.display = "block";
        grid232.style.display = "block";
        grid234.style.display = "block";
        grid242.style.display = "block";
        grid244.style.display = "block";
        grid255.style.display = "block";
        grid260.style.display = "block";
        grid238.style.display = "block";
        grid230.style.display = "block";
        grid700.style.display = "block";
        grid702.style.display = "block";
        gridMathLab.style.display = "block";
        grid251.style.display = "block";
    }
}

function fullCredit() {
    if (check2.checked == true)
    {
        grid248.style.display = "none";
    }
    else
    {
        grid248.style.display = "block";
    }
}
























/*
var grid210 = document.getElementById('grid210');
var grid212 = document.getElementById('grid212');
var grid214 = document.getElementById('grid214');
var grid220 = document.getElementById('grid220');
var grid222 = document.getElementById('grid222');
var grid224 = document.getElementById('grid224');
var grid230 = document.getElementById('grid230');
var grid232 = document.getElementById('grid232');
var grid234 = document.getElementById('grid234');
var grid242 = document.getElementById('grid242');
var grid244 = document.getElementById('grid244');
var grid255 = document.getElementById('grid255');
var grid260 = document.getElementById('grid260');
var grid238 = document.getElementById('grid238');

function display2() {
    if (check4.checked == true) {
        grid210.style.width = "100%";
        grid212.style.width = "100%";
        grid214.style.width = "100%";
        grid220.style.width = "100%";
        grid222.style.width = "100%";
        grid224.style.width = "100%";
        grid230.style.width = "100%";
        grid232.style.width = "100%";
        grid234.style.width = "100%";
        grid242.style.width = "100%";
        grid244.style.width = "100%";
        grid255.style.width = "100%";
        grid260.style.width = "100%";
        grid238.style.width = "100%";
    }
    else 
    {
        grid210.style.width = "50%";
        grid212.style.width = "50%";
        grid214.style.width = "50%";
        grid220.style.width = "50%";
        grid222.style.width = "50%";
        grid224.style.width = "50%";
        grid230.style.width = "50%";
        grid232.style.width = "50%";
        grid234.style.width = "50%";
        grid242.style.width = "50%";
        grid244.style.width = "50%";
        grid255.style.width = "50%";
        grid260.style.width = "50%";
        grid238.style.width = "50%";
    }
}
*/