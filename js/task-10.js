function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRefs = document.querySelector("#controls");
const inputValueRef = controlsRefs.firstElementChild;
const btnCreateRef = inputValueRef.nextElementSibling;
const btnDestroyRef = controlsRefs.lastElementChild;
const boxesRef = document.querySelector("#boxes");

const makeBoxes = () => {
  const boxesArray = [];
  const amount = Number(inputValueRef.value);

  let boxWidthHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");

    box.style.width = `${boxWidthHeight}px`;
    box.style.height = `${boxWidthHeight}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxWidthHeight += 10;

    boxesArray.push(box);
  }

  boxesRef.append(...boxesArray);
};

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
};

btnCreateRef.addEventListener("click", makeBoxes);
btnDestroyRef.addEventListener("click", destroyBoxes);
