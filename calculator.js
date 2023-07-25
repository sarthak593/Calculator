function calculate() {
  var input = document.getElementById("input");
  var result = eval(input.value);
  input.value = result;
}

var buttons = document.querySelectorAll(".button, .operator");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var input = document.getElementById("input");
    input.value += this.value;
  });
}
function clearInput() {
  var input = document.getElementById("input");
  input.value = "";
}

function deleteInput() {
  var input = document.getElementById("input");
  input.value = input.value.slice(0, -1);
}
