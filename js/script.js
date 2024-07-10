let display = document.getElementById('display');
let number = 0;

function add() {
  number += 1;
  display.textContent = number + "clicks"; // Use textContent to set the text content of the element
}