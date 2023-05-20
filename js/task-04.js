const counterRef = document.querySelector("#counter");
const btnIncrementRef = counterRef.lastElementChild;
const btnDecrementRef = counterRef.firstElementChild;
const valueRef = btnDecrementRef.nextElementSibling;

let counterValue = 0;

btnIncrementRef.addEventListener("click", () => {
  valueRef.textContent = counterValue += 1;
});

btnDecrementRef.addEventListener("click", () => {
  valueRef.textContent = counterValue -= 1;
});
