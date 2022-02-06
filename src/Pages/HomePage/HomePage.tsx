import React, {ChangeEvent} from 'react';
import classes from './HomePage.module.scss';
import {ITask} from "../../Interfaces";
import {Buttons} from '../../components/Buttons/'
import {InputTask} from "../../components/InputBoxes";
import {GoToButton} from "../../components/Buttons/GoToButton";

interface Props {
    handleChange(event: ChangeEvent<HTMLInputElement>): void;

    addTask(): void;

    tag: string;
    task: string;
    todoList: ITask[];
}

const HomePage = ({handleChange, addTask, tag, task, todoList}: Props) => {
    return (
        <div className={classes.header}>
            <div className={classes.inputContainer}>
                <InputTask task={task} handleChange={handleChange} NameTask={"task"} TaskValue={task}
                           Places={"Task..."}/>
                <InputTask task={task} handleChange={handleChange} NameTask={"tags"} TaskValue={tag}
                           Places={"Tag or empty string..."}/>

                <Buttons addTask={addTask} todoList={todoList}/>
                <GoToButton todoList={todoList} text={"Go To Items"} link={"/items"}/>
            </div>
        </div>
    );
};

export {HomePage};