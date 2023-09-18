const form = document.querySelector("#validation-input");

form.addEventListener("blur", onBlurForm);


function onBlurForm () {
  const minLength = parseInt(form.getAttribute('data-length'));
  const actualLength = form.value.length;

  if (actualLength === minLength) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }
};