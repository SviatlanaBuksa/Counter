"use strict";

let count = 0;

let counterValue = document.getElementById("counter-value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    counterValue.textContent = count;

    if (count > 0) {
      counterValue.style.color = "green";
    } else if (count < 0) {
      counterValue.style.color = "red";
    } else {
      counterValue.style.color = "#222";
    }
  });
});
