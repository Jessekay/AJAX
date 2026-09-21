const input = document.querySelector('input');
const searchText = document.getElementById('search');

const updatedSearchText = debounce(text => {
  searchText.textContent = text;
});

function debounce(cb, delay) {
  let timeout
  return (...args) => {
   clearTimeout(timeout)
   timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

const search = debounce((query) => {
  console.log('Request sent for:', query);
  searchText.textContent = query;
}, 1000)

input.addEventListener('input', e => {
  search(e.target.value)
})