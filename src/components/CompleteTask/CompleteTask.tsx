import React from 'react';
import {ITask} from "../../Interfaces";
import {TodoTask} from "../Header";
import classes from './CompleteTask.module.scss'
import '../../App.scss'
import {GoToButton} from "../Buttons/GoToButton";
import {SearchBar} from '../SearchBar'

interface Props {
    todoList: ITask[];
    completeTask(taskNameToDelete: string): void;
}

const CompleteTask = ({todoList, completeTask}: Props) => {
    return (
        <div className={classes.todoList}>
            {todoList.map((task: ITask, key: number) => {
                return <TodoTask todoList={todoList} key={key} task={task} completeTask={completeTask}/>
            })}
            <GoToButton todoList={todoList} text={"Go To Home Page"} link={"/"}/>
        </div>
    );
};

export default CompleteTask;