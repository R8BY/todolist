import React from 'react';
import {ITask} from "../../Interfaces";
import {TodoTask} from "../Header";
import classes from './CompleteTask.module.scss'
import '../../App.scss'
import {GoToButton} from "../Buttons/GoToButton";

interface Props{
    todoList: ITask[];
    completeTask(taskNameToDelete: string): void;
}

const CompleteTask = ({todoList, completeTask}:Props) => {
    return (
        <div className="App">
            <div className={"header"}>
                <div className={classes.todoList}>
                    {todoList.map((task: ITask, key: number) => {
                        return <TodoTask key={key} task={task} completeTask={completeTask}/>
                    })}
                    <GoToButton todoList={todoList} text={"Go To Home Page"} link={"/"}/>
                </div>
            </div>
        </div>
    );
};

export default CompleteTask;