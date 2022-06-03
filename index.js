var input = document.getElementById("input");

var button = document.getElementById("button");


var iconbox;
var textbox;
var close;
var i;

button.addEventListener("click", buttonFuction);

function asy() {
  close = document.getElementsByClassName("icon");

  for (i = 0; i < close.length; i++) {
    console.log();

    close[i].onclick = function () {
      var div = this.parentElement;

      div.style.display = "none";
    };
  }
}

asy();

function buttonFuction() {
  var inputvalue = input.value;

  if (inputvalue == "") {
    if (confirm("please write a note!")) {
    } else {
      alert("Goodbye from here");

      history.prev();
    }
  } else {
    var newELementNodal = document.createElement("li");

    var textnode = document.createTextNode(inputvalue);

    second_section.appendChild(newELementNodal);

    newELementNodal.appendChild(textnode);

    iconbox = document.createElement("span");

    textbox = document.createTextNode("X");

    newELementNodal.appendChild(iconbox);

    iconbox.appendChild(textbox);

    iconbox.className = "icon";

    input.value = "";

    console.log(inputvalue);
  }

  iconbox.addEventListener("click", () => {
    asy();
  });

  var li = document.getElementsByTagName("li");
}
