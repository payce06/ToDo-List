const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    addTodo();
})

input.addEventListener('keypress', (e) => {
    if (e.key == 'Enter'){
        addTodo();
    }
});
