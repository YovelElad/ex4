function move4() {
    // document.getElementsByTagName("p")[0].innerHTML = "script4";

    document.getElementById("colorInput").disabled = false;


    document.getElementById("color").addEventListener("mouseover", change);
    document.getElementById("color").addEventListener("mouseout", changeBack);

    function change() {
        document.getElementById("colorInput").style.backgroundColor = "red";
    }

    function changeBack() {
        document.getElementById("colorInput").style.backgroundColor = "white";
    }

   move5();
    var elem = document.getElementById("colorInput");
    var topPos = 0;
    var leftPos = 0;

    var up = setInterval(upFunc, 20);
    var right = setInterval(rightFunc, 15);


    var i = 1;
    var down;
    var left;

    function rightFunc() {
        if (leftPos == 83) {
            clearInterval(right);
            left = setInterval(leftFunc, 40);
        }
        else {
            leftPos++;

            elem.style.left = leftPos + '%';
        }
    }

    function leftFunc() {
        if (leftPos == 0) {
            clearInterval(left);
            right = setInterval(rightFunc, 35);
        }
        else {
            leftPos--;
            elem.style.left = leftPos + '%';
        }
    }

    function upFunc() {
        i++;
        if (topPos == 89) {
            clearInterval(up);
            down = setInterval(downFunc, 20);
        }
        else {
            topPos++;
            elem.style.top = topPos + '%';
        }
    }

    function downFunc() {
        if (topPos == 0) {
            clearInterval(down);
            up = setInterval(upFunc, 20);
        }
        else {
            topPos--;
            elem.style.top = topPos + '%';
        }


    }
}