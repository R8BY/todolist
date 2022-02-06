import React, {FC, ChangeEvent, useState} from 'react';
import './App.scss';
import {ITask} from "./Interfaces";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import {ItemsPage} from './Pages/ItemsPage'
import {BadPage} from "./Pages/404";

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
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route>
                            <Route path="/" element={<HomePage handleChange={handleChange} addTask={addTask} tag={tag} task={task} todoList={todoList}/>}/>
                            <Route path="items" element={<ItemsPage todoList={todoList} completeTask={completeTask}/>}/>
                            <Route path="*" element={<BadPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
