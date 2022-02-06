import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Button.module.scss";
import {ITask} from "../../Interfaces";


interface Props {
    todoList: ITask[];
    text:string;
    link:string;
}

const GoToButton = ({todoList,text,link}:Props) => {
    return (
        <div>
            {todoList.length > 0 ?
                <Link to={link} className={classes.linkToItems}>{text}</Link>
                : null}
        </div>
    );
};

export { GoToButton };