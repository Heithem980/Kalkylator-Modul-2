const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const btnEquals = document.querySelector(".btn-equal");
const btnClear = document.querySelector(".btn-clear");
buttons.forEach((x) => {
  x.addEventListener("click", display);
});

function display(event) {
  let lastChar = screen.value[screen.value.length - 1];
  let inputValue = event.target.getAttribute("data-num");

  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "/" ||
    lastChar === "*" ||
    lastChar === "."
  ) {
    if (
      inputValue === "+" ||
      inputValue === "-" ||
      inputValue === "*" ||
      inputValue === "/" ||
      inputValue === "."
    ) {
      return;
    }
  }

  screen.value = screen.value + event.target.getAttribute("data-num");
  console.log(event.target.getAttribute("data-num"));
}

btnEquals.addEventListener("click", calculate);
btnClear.addEventListener("click", clear);

function clear() {
  screen.value = "";
}

function calculate() {
  screen.value = eval(screen.value);
}
