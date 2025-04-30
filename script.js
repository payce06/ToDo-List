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

function addTodo(){
    const task = input.value.trim();
    if (task == '') {
        return
    };

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;
    span.addEventListener('click', () => {
        li.classList.toggle('completed');
    });