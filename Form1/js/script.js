


function check() {
  var flag = false;
  var inputElements = document.getElementsByClassName('chbx');
  for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
          flag = true;
          break;
      }
  }
  if(flag == false){
      document.getElementById("chooseOne").style.visibility = "visible";
      return false;
  }
  return true;
}

