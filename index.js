function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  //   param arrfunc response.json()
  .then(json => renderBooks(json))
  /*the response.json() is passed to the renderBooks function with the JSON 
  response. This triggers the function renderBooks below
  
  */
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
