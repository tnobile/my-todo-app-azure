import React, { useState, useEffect } from 'react'
import Todos from "../Todos/Todos"
import { createTask, deleteTask, editTask, fetchSettings, getAllTasks } from "../../services/TodoService"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [numberOfTasks, setNumberOfTasks] = useState([])
    const [isTaskEdited, setTaskEdited] = useState(false);
    //const [appSettings, setAppSettings] = useState({});

    useEffect(() => {
        setRemaining(todos.filter(f => f.isCompleted).length)
    }, [todos])

    useEffect(() => {
        getAllTasks().then(tasks => {
            console.log(`get all tasks:${tasks.length}`);
            if (tasks !== 'undefined' && Array.isArray(tasks))
                setTodos(tasks.map(t => ({ ...t, isCompleted: t.status === "completed" })));
            else
                console.log(`not array`,tasks );
        });
    }, [isTaskEdited, numberOfTasks])

    useEffect(() => {
        async function fetchData() {
            const response = await fetchSettings();
            console.log(JSON.stringify(response));
            //setAppSettings(response);
        }
        fetchData();
    }, []);

    const addTodo = (task) => {
        //setTodos([...todos, { task: task, isCompleted: true }]);
        createTask(task).then(() => {
            setNumberOfTasks(p => p + 1);
        });
    }

    const removeTodo = (id) => {
        //const newTodos = [...todos];
        //newTodos.splice(id, 1);
        //setTodos(newTodos);
        deleteTask(id).then(response => {
            console.log(`deleted ${id}`);
            setNumberOfTasks(p => p - 1);
        });
    }

    const completeTodo = (id) => {
        console.log('complete todo with ' + id);
        //const newTodos = [...todos];
        //newTodos[id].isCompleted = true;
        //setTodos(newTodos);
        editTask({ id: id, status: "completed" }).then(resp => {
            console.log(`resp:${JSON.stringify(resp)}`);
            setTaskEdited(resp);
        });
    }
    return (
        <div className="App">
            <Todos
                remaining={remaining}
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                addTodo={addTodo} />
        </div>
    );
}

export default Home;