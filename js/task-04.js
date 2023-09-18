let value = document.querySelector("#value");

const decrement = document.querySelector
(`[data-action="decrement"]`);

const increment = document.querySelector
('[data-action="increment"]');

let counterValue = 0;


const incre = () => {
  counterValue += 1
  updateValue();
};

const decrece = () => {
  counterValue -= 1
  updateValue()
};


increment.addEventListener("click", incre);

decrement.addEventListener("click", decrece);

const updateValue = () =>
  value.textContent = counterValue;