


function move() {
    document.getElementById("submit").style.visibility = "visible";

    document.getElementById("fullNameInput").disabled = false;

    document.getElementById("fullName").addEventListener("mouseover", change);
    document.getElementById("fullName").addEventListener("mouseout", changeBack);

    function change() {
        document.getElementById("fullNameInput").style.backgroundColor = "red";
    }

    function changeBack() {
        document.getElementById("fullNameInput").style.backgroundColor = "white";
    }


    

   


    move2();
   
    var elem = document.getElementById("fullNameInput");
    var topPos = 0;
    var leftPos = 0;
    var up = setInterval(upFunc, 40);
    var right = setInterval(rightFunc, 120);
    var i = 1;
    var down;
    var left;

    function rightFunc() {
        if (leftPos == 83) {
            clearInterval(right);
            left = setInterval(leftFunc, 50);
        }
        else {
            leftPos++;
            elem.style.left = leftPos + '%';
        }
    }

    function leftFunc() {
        if (leftPos == 0) {
            clearInterval(left);
            right = setInterval(rightFunc, 50);
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
            down = setInterval(downFunc, 10);
        }
        else {
            topPos++;
            elem.style.top = topPos + '%';
        }
    }

    function downFunc() {
        if (topPos == 0) {
            clearInterval(down);
            up = setInterval(upFunc, 30);
        }
        else {
            topPos--;
            elem.style.top = topPos + '%';
        }
    }
}
