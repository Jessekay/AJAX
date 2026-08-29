const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log('Response:', xhr.responseText);
  }
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
xhr.send();