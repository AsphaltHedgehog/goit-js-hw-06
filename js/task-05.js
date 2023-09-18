const inputNickname = document.getElementById("name-input");
const outputNickname = document.getElementById("name-output");



inputNickname.addEventListener("input", function () {
  const inputEl = inputNickname.value;

  inputEl.trim() === "" ? outputNickname.textContent = "Anonymous": outputNickname.textContent = inputEl;
})