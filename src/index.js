"use strict";
let count = 0;
function updateUI() {
    const countElement = document.getElementById("count");
    countElement.innerText = count.toString();
}
function increment() {
    count++;
    updateUI();
}
function decrement() {
    count--;
    updateUI();
}
// Initial load
updateUI();
