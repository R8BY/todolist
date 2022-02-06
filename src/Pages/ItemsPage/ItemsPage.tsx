import React from 'react';
// import classes from "./ItemsPage.module.scss";
import CompleteTask from "../../components/CompleteTask/CompleteTask";
import {ITask} from "../../Interfaces";

interface Props{
    todoList: ITask[];
    completeTask(taskNameToDelete: string): void;
}

const ItemsPage = ({todoList, completeTask}:Props) => {
    return (
        <div>
            <CompleteTask todoList={todoList} completeTask={completeTask}/>
        </div>
    );
};

export { ItemsPage };