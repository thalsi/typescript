let count: number = 0;

function updateUI(): void {
  const countElement = document.getElementById("count") as HTMLElement;
  countElement.innerText = count.toString();
}

function increment(): void {
  count++;
  updateUI();
}

function decrement(): void {
  count--;
  updateUI();
}

// Initial load
updateUI();