const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')

const todoItemsContainer = document.getElementById('todo-items-container')

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    console.log('user entered', value);

    const li = document.createElement('li')
    li.innerText = value;

    const delButton = document.createElement('button')
    delButton.innerText = 'x'

    delButton.addEventListener('click', function(){
        li.remove();
    })

    li.appendChild(delButton);

    todoItemsContainer.appendChild(li)
    todoInput.value = '';
});

