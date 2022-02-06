import React from 'react';
import {ITask} from '../../Interfaces';
import '../../App.scss';

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className={"task"}>
            <div className={"content"}>
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