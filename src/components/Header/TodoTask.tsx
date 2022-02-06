import React from 'react';
import {ITask} from '../../Interfaces';
import classes from './TodoTask.module.scss'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className={classes.task}>
            <div className={classes.content}>
                <span>{task.taskName}</span>
                <span>{task.tag}</span>
            </div>
            <button
                onClick={(() => {
                     completeTask(task.taskName)
                })}>
                X
            </button>
        </div>
    );
};

export {TodoTask};