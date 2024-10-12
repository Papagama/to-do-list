 
        const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
        const taskList = document.getElementById('taskList');

        addTaskButton.addEventListener('click', function() {
            const taskText = taskInput.value;

            if (taskText !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = taskText;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = '✖';
                deleteButton.addEventListener('click', function() {
                    listItem.remove();
                });

                listItem.appendChild(deleteButton);
                taskList.appendChild(listItem);
                taskInput.value = '';
            }
        });

        taskList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                event.target.remove();
            }
        });
    