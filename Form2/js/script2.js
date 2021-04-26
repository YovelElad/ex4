function move2() {
    document.getElementById("passwordInput").disabled = false;


    document.getElementById("password").addEventListener("mouseover", change);
    document.getElementById("password").addEventListener("mouseout", changeBack);

    function change() {
        document.getElementById("passwordInput").style.backgroundColor = "red";
    }

    function changeBack() {
        document.getElementById("passwordInput").style.backgroundColor = "white";
    }

move3();
       var elem = document.getElementById("passwordInput");
       var topPos = 0;
       var leftPos = 0;
   
       var up = setInterval(upFunc, 10);
        var right = setInterval(rightFunc, 50);
   
   
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
               
                   elem.style.left = leftPos+ '%';
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
               down = setInterval(downFunc, 30);
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