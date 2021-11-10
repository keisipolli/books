// event elements
const form = document.querySelector('form');
const booksList = document.querySelector('#books-list');

// events
form.addEventListener('submit', addBook);
//booksList.addEventListener('click', deleteBook);
//document.addEventListener('DOMContentLoaded', getBooksFromLocalStorage);

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book
    const book = [title, author, isbn]
    // create <tr> element
    const tr = document.createElement('tr');

    for(let i = 0; i < book.length; i++){
        // create <td> element
        let td = document.createElement('td');
        // create text element
        let text = document.createTextNode(book[i]);
        // add text to <td>
        td.appendChild(text);
        // add td to tr
        tr.appendChild(td);// add td to tr
        tr.appendChild(td);
    }

    // X link
    // create <td> element
    td = document.createElement('td');
    // create <a> element
    const link = document.createElement('a');
    // set href atribute to <a>
    link.setAttribute('href', '#');
    // add text content to <a>
    link.appendChild(document.createTextNode('X'));
    // add <a> to <li>
    td.appendChild(link);
    // add td to tr
    tr.appendChild(td);
    // add tr to tbody
    booksList.appendChild(tr);

    // save book
    //addBookToLocalStorage(book);
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}

/*
function getTasksFromLocalStorage(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (tasksElement){
        // create <li> element
        const li = document.createElement('li');
        // add css class
        li.className = 'collection-item';
        // create text element
        const text = document.createTextNode(tasksElement);
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
    });
}
*/

/*
function deleteBook(event){
   if(event.target.textContent === 'X'){
       if(confirm('Do you want to delete this task?')){
           event.target.parentElement.remove();
           task = event.target.parentElement.firstChild.textContent;
           deleteTaskFromLocalStorage(task);
       }
   }
}
*/
/*
function deleteBookFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (tasksElement, index){
        if(tasksElement === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
*/


/*
function addTaskToLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
*/