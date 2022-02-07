import React, {useState, useEffect, ChangeEvent} from 'react';
import CompleteTask from "../../components/CompleteTask/CompleteTask";
import {ITask} from "../../Interfaces";
import {SearchBar} from "../../components/SearchBar";
import classes from "../../components/SearchBar/SearchBar.module.scss";

interface Props {
    todoList: ITask[];
    completeTask(taskNameToDelete: string): void;
}

const ItemsPage = ({todoList, completeTask}: Props) => {
    const [search, setSearch] = useState('');
    const [newList, setNewList] = useState<any>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
    };

    const searchTodos = ():any => {
        let currentTodos = [];
        let newList = [];
        if (search !== ''){
            currentTodos = (todoList);
            newList = currentTodos.filter(todoList => {
                const lc = todoList.taskName.toLowerCase();
                const filter = search.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = todoList;
        }
        console.log(newList);
    };

    useEffect(() => {
        setNewList(newList);
    });

    return (
        <>
            {/*<SearchBar todoList={todoList}/>*/}
            <input type="text"
                   placeholder={"Search Items..."}
                   id={classes.SearchBar}
                   onChange={handleChange}
            />
            <button onClick={searchTodos}>Find</button>
            <CompleteTask todoList={todoList} completeTask={completeTask}/>
        </>
    );
};

export {ItemsPage};