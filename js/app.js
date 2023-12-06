if (taskTitle.value === '') {
	containerAlert.classList.add('alert');
	containerAlert.innerHTML = 'The input value cannot be empty';
	containerAlert.style.display = 'block';

	setTimeout(() => {
		containerAlert.style.display = 'none';
	}, 2000);
	return;
} else {
	document.querySelector('.modal.is-visible').classList.remove(isVisible);
	if (tasks.length < 7) {
		const task = new Task(taskTitle.value);
		tasks.push(task);
		todoContainer.appendChild(TodoTaskContainer(task));
	} else {
		containerAlert.classList.add('alert');
		containerAlert.innerHTML = 'You have reached the maximum amount of tasks, please delete some tasks.';
		containerAlert.style.display = 'block';
		return;
		
