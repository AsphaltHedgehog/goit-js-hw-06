function submitEvent (event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const dataObj = {};

  formData.forEach((el, i) => {
    dataObj[i] = el;
  });

  if (!dataObj.email || !dataObj.password) {
    alert("Заповніть всі поля");
    return;
  };

  console.log(dataObj);

  form.reset();
};


const loginForm = document.querySelector(".login-form");
if (loginForm) {
  loginForm.addEventListener("submit", submitEvent)
};
