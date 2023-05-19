function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColorRef = document.querySelector("button");
const colorValueRef = document.querySelector(".color");
const bodyRef = document.body;

const changeBackgroundColor = () => {
  const randomColor = getRandomHexColor();

  colorValueRef.textContent = randomColor;
  bodyRef.style.backgroundColor = randomColor;
};

btnChangeColorRef.addEventListener("click", changeBackgroundColor);
