import React, {ChangeEvent} from 'react';

interface Props{
    task: string;
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
    TaskValue: string;
    NameTask: string;
    Places: string;
}

const InputTask = ({handleChange, TaskValue, NameTask, Places}:Props) => {
    return (
        <div>
            <input
                type="text"
                placeholder={Places}
                name={NameTask}
                value={TaskValue}
                onChange={handleChange}
            />
        </div>
    );
};

export { InputTask };