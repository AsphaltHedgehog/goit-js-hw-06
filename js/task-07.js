const fontSizeSlide = document.querySelector("#font-size-control");

const text = document.getElementById("text");

fontSizeSlide.addEventListener("input", onFontChangeSize);


function onFontChangeSize () {
  text.style.fontSize = fontSizeSlide.value + "px"
}