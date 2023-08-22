"use strict";

let decreaseBtn = document.getElementById("decrease-btn");
let counterValue = document.getElementById("counter-value");
let currentValue = +counterValue.innerHTML;

console.log(currentValue);

decreaseBtn.addEventListener("click", decreaseValue);

function decreaseValue() {
  counterValue.innerHTML = `${--currentValue}`;
}
