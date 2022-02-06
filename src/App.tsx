import React, {FC, ChangeEvent, useState} from 'react';
import './App.scss';
import {ITask} from "./Interfaces";
import {TodoTask} from "./components/Header";

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [tag, setTag] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setTag(event.target.value);
        }
    };

    const addTask = (): void => {
        const newTask = {taskName: task, tag: tag};
        setTodoList([...todoList, newTask]);
        setTask("");
        setTag("");
    };

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName !== taskNameToDelete;
        }))
    };

    return (
        <div className="App">
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
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList">
                {todoList.map((task: ITask, key: number) => {
                    return <TodoTask key={key} task={task} completeTask={completeTask}/>
                })}
            </div>
        </div>
    );
}

export default App;
