import React, {ChangeEvent} from 'react';
import classes from './HomePage.module.scss';
import {
    Link
} from "react-router-dom";
import {ITask} from "../../Interfaces";

interface Props {
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
    addTask(): void;
    tag:string;
    task:string;
    todoList: ITask[];
}

const HomePage = ({handleChange, addTask, tag, task, todoList}:Props) => {
    return (
        <div className={classes.header}>
            <div className={classes.inputContainer}>
                <input
                    type="text"
                    placeholder="Task..."
                    name="task"
                    value={task}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Tag or empty string..."
                    name="tags"
                    value={tag}
                    onChange={handleChange}
                />
                <Link to={"items"} className={classes.linkToItems} onClick={addTask}>Add Task</Link>
                {todoList.length > 0 ?
                    <Link to={"items"} className={classes.linkToItems}>Go to items</Link>
                    : null }
            </div>
        </div>
    );
};

export {HomePage};