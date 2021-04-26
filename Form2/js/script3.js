function move3() {

    document.getElementById("guitarInput").disabled = false;


    document.getElementById("guitar").addEventListener("mouseover", change);
    document.getElementById("guitar").addEventListener("mouseout", changeBack);

    function change() {
        document.getElementById("guitarInput").style.backgroundColor = "red";
    }

    function changeBack() {
        document.getElementById("guitarInput").style.backgroundColor = "white";
    }

   move4();
    var elem = document.getElementById("guitarInput");
    var topPos = 0;
    var leftPos = 0;

    var up = setInterval(upFunc, 15);
    var right = setInterval(rightFunc, 20);


    var i = 1;
    var down;
    var left;

    function rightFunc() {
        if (leftPos == 83) {
            clearInterval(right);
            left = setInterval(leftFunc, 15);
        }
        else {
            leftPos++;

            elem.style.left = leftPos + '%';
        }
    }

    function leftFunc() {
        if (leftPos == 0) {
            clearInterval(left);
            right = setInterval(rightFunc, 5);
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