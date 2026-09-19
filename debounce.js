const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

input.addEventListener("input", e => {
  defaultText.textContent = e.target.value;
})

const updatedText = debounce((text) => {
  defaultText.textContent = text;
})

function debounce(cb, delay = 1000) {

}