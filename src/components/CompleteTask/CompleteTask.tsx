import React from 'react';
import {ITask} from "../../Interfaces";
import {TodoTask} from "../Header";
import classes from './CompleteTask.module.scss'
import c from '../../Pages/HomePage/HomePage.module.scss'
import {
    Link
} from "react-router-dom";

interface Props{
    todoList: ITask[];
    completeTask(taskNameToDelete: string): void;
}

const CompleteTask = ({todoList, completeTask}:Props) => {
    return (
        <div className={classes.todoList}>
            {todoList.map((task: ITask, key: number) => {
                return <TodoTask key={key} task={task} completeTask={completeTask}/>
            })}
            <Link to={"/"} className={c.linkToItems}>Go to Home page</Link>
        </div>
    );
};

export default CompleteTask;