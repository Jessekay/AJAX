const input = document.querySelector('input');
const searchText = document.getElementById('search');

const updatedSearchText = debounce(text => {
  // console.log('DEBOUNCED RAN:', text);
  searchText.textContent = text;
});


input.addEventListener('input', e => {
  // searchText.textContent = e.target.value;
  // console.log('keystroke:', e.target.value);
  updatedSearchText(e.target.value)
})

function debounce(cb, delay = 1000) {
  let timeout
  return (...args) => {
   clearTimeout(timeout)
   timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}