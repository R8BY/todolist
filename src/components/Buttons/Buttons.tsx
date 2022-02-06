import React from 'react';
import classes from './Button.module.scss';
import {Link} from "react-router-dom";
import {ITask} from "../../Interfaces";

interface Props {
    addTask(): void;

    todoList: ITask[];
}

const Buttons = ({addTask}: Props) => {
    return (
        <div>
            <Link to={"items"} className={classes.linkToItems} onClick={addTask}>Add Task</Link>
        </div>
    );
};

export {Buttons};