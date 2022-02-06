import React, {ChangeEvent, useState} from 'react';
import classes from './SearchBar.module.scss'
import {ITask} from "../../Interfaces";

interface Props{
    todoList: ITask[];
}

const SearchBar = ({todoList}:Props) => {
    const [search, setSearch] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
        console.log(todoList);
    };

    return (
        <>
            <input type="text"
                   placeholder={"Search Items..."}
                   id={classes.SearchBar}
                   onChange={handleChange}
            />
        </>
    );
};

export {SearchBar};