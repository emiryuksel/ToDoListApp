const addForm = document.querySelector('.add'); // Selects the element with class 'add'.
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa-solid fa-trash-can delete"></i>
    </li>
    `;
    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault(); // Prevents page from refreshing.
    const todo = addForm.add.value.trim(); // Gets the value and removes leading/trailing whitespace.
    console.log(todo); // Logs the todo to the console.
    if (todo.length) { // If the todo has a length (not empty)
        generateTemplate(todo);
        addForm.reset();
    }

})

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

const filterTodos = term => {
    // Filters todos based on the search term
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered')); // Hides todos that don't match the search term

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered')); // Shows todos that match the search term
}

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase(); // Gets the search term, trims whitespace, and converts to lowercase.
    filterTodos(term);
})