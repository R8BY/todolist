import React from 'react';
import {ITask} from '../../Interfaces';
import classes from './TodoTask.module.scss'

interface Props {
    task: ITask;
    todoList: ITask[];
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask,todoList}: Props) => {

    const CheckEmptyTask = (todoList:any) => {
        console.log(todoList);
        if (todoList.length-1 === 0){
            alert("Empty!");
        }
    }

    return (
        <div className={classes.task}>
            <div className={classes.content}>
                <span>{task.taskName}</span>
                <span>{task.tag}</span>
            </div>
            <button
                onClick={(() => {
                     completeTask(task.taskName);
                     CheckEmptyTask(todoList);
                })}>
                X
            </button>
        </div>
    );
};

export {TodoTask};