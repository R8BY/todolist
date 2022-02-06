import React, {ChangeEvent} from 'react';
import '../../App.scss';
import {
    Link
} from "react-router-dom";

interface Props {
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
    addTask(): void;
    tag:string;
    task:string;
}

const HomePage = ({handleChange, addTask, tag, task}:Props) => {
    return (
        <div className="header">
            <div className="inputContainer">
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
            </div>
            <button onClick={addTask}><Link to={"items"}>Add Task</Link></button>
        </div>
    );
};

export {HomePage};