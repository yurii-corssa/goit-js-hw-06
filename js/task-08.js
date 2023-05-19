const loginFormRef = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const dataInput = {
    email: loginFormRef.elements.email.value,
    password: loginFormRef.elements.password.value,
  };

  if (dataInput.email === "" || dataInput.password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(dataInput);

  event.currentTarget.reset();
};

loginFormRef.addEventListener("submit", handleSubmit);
