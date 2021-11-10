// event elements
const form = document.querySelector('form');
const bookList = document.querySelector('.collection');
const deleteBooksBtn = document.querySelector('#delete-books');

// events
form.addEventListener('submit', addBook);
bookList.addEventListener('click', deleteBook);
deleteBooksBtn.addEventListener('click', deleteBooks);

function addBook(event){
    // get form input data
    const bookInput = document.querySelector('#book');
    let book = bookInput.value;
    // create <li> element
    const li = document.createElement('li');
    // add css class
    li.className = 'collection-item';
    // create text element
    const text = document.createTextNode(book);
    // add text to <li>
    li.appendChild(text);
    // create <a> element
    const link = document.createElement('a');
    // add css class
    link.className = 'secondary-content';
    // set href atribute to <a>
    link.setAttribute('href', '#');
    // add text content to <a>
    link.appendChild(document.createTextNode('X'));
    // add <a> to <li>
    li.appendChild(link);
    // add li to ul
    const ul = document.querySelector('.collection');
    ul.appendChild(li);
    bookInput.value = '';
    event.preventDefault();
}