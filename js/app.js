document.addEventListener('DOMContentLoaded', function () {
	const openModal = document.querySelectorAll('[data-open]');
	const closeModal = document.querySelectorAll('[data-close]');

	const isVisible = 'is-visible';

	const btnTask = document.querySelector('#add__task');
	const taskTitle = document.querySelector('#todo1');

	const containerAlert = document.querySelector('#alert__empty');

	const todoContainer = document.querySelector('.to-do');

	const containerDrop = document.querySelectorAll('.dropzone');
	let draggableTodo = null;

	let tasks = [];
	


	const TodoTaskContainer = (task) => {
		const $div = document.createElement('div');
		const $p = document.createElement('p');
		const $button = document.createElement('button');

		$div.classList.add('container__todo');
		$div.classList.add('card');
		$div.setAttribute('id', task.getId());

		$div.setAttribute('draggable', 'true');

		$div.addEventListener('dragstart', dragStart);
		$div.addEventListener('dragend', dragEnd);

		function dragStart() {
			draggableTodo = this;
		}

		function dragEnd() {
			draggableTodo = null;
		}

		containerDrop.forEach((status) => {
			status.addEventListener('dragover', dragOver);
			status.addEventListener('dragenter', dragEnter);
			status.addEventListener('dragleave', dragLeave);
			status.addEventListener('drop', dragDrop);
		});

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
		
	};
});
