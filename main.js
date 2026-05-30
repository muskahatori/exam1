let inputEl = document.getElementById('input');
let listEl = document.getElementById('list');
let taskEl = document.getElementById('taskCount');

function updateCount() {
    taskEl.innerText = listEl.children.length;
}

inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
    if (e.key === 'Escape') {
        inputEl.value = '';
    }
});

function addTask() {
    const text = inputEl.value.trim();
    if (!text) {
        return;
    }

    let li = document.createElement('li');
    li.setAttribute('class', 'item');

    let left = document.createElement('div');
    left.setAttribute('class', 'item_left');

    let circle = document.createElement('span');
    circle.setAttribute('class', 'circle');

    let p = document.createElement('p');
    p.innerText = text;

    left.append(circle, p);

    let div = document.createElement('div');
    let buttonDone = document.createElement('button');
    buttonDone.innerText = 'Done';
    let buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Delete';

    div.append(buttonDone, buttonDelete);
    li.append(left, div);
    listEl.appendChild(li);

    buttonDone.onclick = () => {
        li.classList.toggle('done');
    };

    buttonDelete.onclick = () => {
        li.remove();
        updateCount();
    };

    inputEl.value = '';
    updateCount();
}