const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = nameInputRef.nextElementSibling.firstElementChild;

const onInputChange = (event) => {
  nameOutputRef.textContent =
    event.target.value === "" ? "Anonymous" : event.target.value;
};

nameInputRef.addEventListener("input", onInputChange);
