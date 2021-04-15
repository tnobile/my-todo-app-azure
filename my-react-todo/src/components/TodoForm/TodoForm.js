import React, { useState } from 'react'
import classes from './TodoForm.module.css'

const TodoForm = (props) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        props.addTodo({ task: value });
        setValue("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className={classes['todo-input']}
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )

}

export default TodoForm;