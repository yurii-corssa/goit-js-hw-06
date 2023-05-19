const inputRef = document.querySelector("#validation-input");
const minLength = Number(inputRef.dataset.length);

const onInputChange = () => {
  const lengthInputValue = inputRef.value.length;

  lengthInputValue > 0 && lengthInputValue < minLength
    ? inputRef.classList.add("invalid")
    : inputRef.classList.remove("invalid");

  lengthInputValue >= minLength
    ? inputRef.classList.add("valid")
    : inputRef.classList.remove("valid");
};

inputRef.addEventListener("blur", onInputChange);
