import React from 'react';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm'
import classes from './Todos.module.css';

const Todos = (props) => {

    //const history = useHistory();
    //if (props.todos.length === 0) return null;

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                TODO LIST ({props.remaining}/{props.todos.length}))
            </div>
            <div className={classes['todo-list']}>
                {props.todos.map((todo, i) => {
                    return <Todo todo={todo} key={i}
                        removeTodo={props.removeTodo}
                        completeTodo={props.completeTodo}
                        index={i} />
                })}
                <TodoForm addTodo={props.addTodo} />
            </div>
        </div>
    )

}

export default Todos;