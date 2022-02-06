import React from 'react';
import {ITask} from "../../Interfaces";
import {TodoTask} from "../Header";
import '../../App.scss';

interface Props{
    todoList: ITask[];
    completeTask(taskNameToDelete: string): void;
}

const CompleteTask = ({todoList, completeTask}:Props) => {
    return (
        <div className="todoList">
            {todoList.map((task: ITask, key: number) => {
                return <TodoTask key={key} task={task} completeTask={completeTask}/>
            })}
        </div>
    );
};

export default CompleteTask;