import React from 'react';
import { useHistory } from 'react-router';
import classes from './Todo.module.css';


const Todo = (props) => {

    const history = useHistory();

    const detail = (task) => {
        console.log(`detail with ${task.id}`);
        localStorage.setItem('task', JSON.stringify(task));
        history.push("/detail");
    }

    return (
        <div className={[classes.todo, props.todo.isCompleted ? classes.completed : ''].join(' ')} key={props.index}>
            <div onClick={() => detail(props.todo)} className={classes['item']}>
                {props.todo.task}
            </div>
            <div>
                <button
                    style={{ background: "red" }}
                    onClick={(e) => { props.removeTodo(props.todo.id); e.preventDefault() }}>x</button>
                <button
                    disabled={props.todo.isCompleted}
                    onClick={() => props.completeTodo(props.todo.id)}>Complete</button>
            </div>
        </div>
    )
}

export default Todo;