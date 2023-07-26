import { useState } from 'react'

import TaskDaoImpl from './TaskDaoImpl'

class Task extends TaskDaoImpl {

    constructor(){
        super();

        const [taskList, setTask] = useState(this.getAll());

        this.taskList = taskList;
        this.setTask = setTask;
    }

    add = (task) => {
        this.setTask([
            ...this.taskList,
            {
                id: this.randomIdGenerator(0, 10000),
                title: task.title,
                description: task.description,
                categoryId: task.categoryId,
                isComplete: false
            }
        ])
    }

    remove = (taskId) => {
        this.setTask(this.taskList.filter((item) => item.id !== parseInt(taskId)));
    }

    complete = (taskId) => {

        let newList = this.taskList.map((item) => {

            if(item.id == taskId )
                item.isComplete = !item.isComplete;

            return item;
        })

        this.setTask(newList);
    }

    randomIdGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;
}

export default Task;