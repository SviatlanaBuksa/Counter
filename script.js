"use strict";

let counterValue = document.getElementById("counter-value");
let currentValue = +counterValue.innerHTML;

let decreaseBtn = document.getElementById("decrease-btn");
decreaseBtn.addEventListener("click", decreaseValue);

let increaseBtn = document.getElementById("increase-btn");
increaseBtn.addEventListener("click", increaseValue);

let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", resetValue);
function decreaseValue() {
  counterValue.innerHTML = `${--currentValue}`;
  setCurrentValueColor(currentValue);
}
function increaseValue() {
  counterValue.innerHTML = `${++currentValue}`;
  setCurrentValueColor(currentValue);
}
function resetValue() {
  currentValue = 0;
  counterValue.innerHTML = `${currentValue}`;
  setCurrentValueColor(currentValue);
}

function setCurrentValueColor(value) {
  if (value < 0) counterValue.style.color = "#FF0000";
  else if (value > 0) {
    counterValue.style.color = "#00FF00";
  } else {
    counterValue.style.color = "#000";
  }
}
