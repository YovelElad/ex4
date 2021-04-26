
function move5() {
    var leftPos = 475;
    var topPos = 400;
    var elem = document.getElementById("submit");
    document.getElementById("submit").addEventListener("mouseover", moveSubmit);

    var i = 0;


    function moveSubmit() {

        if (leftPos == 475 && topPos == 400) {
            if (i < 4)
                var right = setInterval(rightFunc, 1);
        }
        if (leftPos == 700 && topPos == 400) {
            if (i < 2) {
                var up = setInterval(upFunc, 1);
            }
            else
                var left = setInterval(leftFunc, 1);
        }

        if (leftPos == 700 && topPos == 200) {
            var down = setInterval(downFunc, 1);
        }

        function rightFunc() {
            if (leftPos == 700) {
                clearInterval(right);
            }
            else {
                leftPos++;
                elem.style.left = leftPos + "px";
            }
        }

        function upFunc() {
            if (topPos == 200) {
                clearInterval(up);
            }
            else {
                topPos--;
                elem.style.top = topPos + "px";
            }
        }

        function downFunc() {
            if (topPos == 400) {
                clearInterval(down);
            }
            else {
                topPos++;
                elem.style.top = topPos + "px";
            }
        }

        function leftFunc() {
            if (leftPos == 475) {
                clearInterval(left);
            }
            else {
                leftPos--;
                elem.style.left = leftPos + "px";
            }
        }
        i++;
    }
}