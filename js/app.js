function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    this.style.border = '5px solid yellow';
}

function dragLeave() {
    this.style.border = 'none';
}

function dragDrop() {
    if (this.classList.contains('doing')) {
        draggableTodo.style.background = 'red';
    } else if (this.classList.contains('done')) {
        draggableTodo.style.background = 'green';
    } else {
        draggableTodo.style.background = '#457b9d';
    }

    this.style.border = 'none';
    this.appendChild(draggableTodo);
}
$p.innerHTML = ${task.getName()};

$button.innerHTML = 'X';
$button.classList.add('remove__button');
$button.addEventListener('click', (e) => {
    removeTodo($div.getAttribute('id'));

    removeFromArray(e);
});
$div.appendChild($p);
$div.appendChild($button);
return $div;
;

const removeTodo = (id) => {
document.getElementById(id).remove();
};

const removeFromArray = (e) => {
let index;
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].name === e.target.parentElement.childNodes[0].innerHTML) {
        index = i;
    }
}

tasks.splice(index, 1);
};
for (let elem of openModal) {
elem.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
});
}
for (let elem of closeModal) {
elem.addEventListener('click', function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
});
}
document.addEventListener('click', (e) => {
if (e.target == document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);

    containerAlert.classList.remove('alert');
}
});
document.addEventListener('keyup', (e) => {
if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    containerAlert.classList.remove('alert');
}
});
btnTask.addEventListener('click', function (e) {
e.preventDefault()});