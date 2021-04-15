import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Detail = () => {

    const task = JSON.parse(localStorage.getItem("task"));

    return (
        <div className="">
            <Jumbotron fluid>
                <Container>
                    <h1>Task Detail</h1>
                    <p>
                        <b>Task</b>: {task.task}
                    </p>
                    <p>
                        <b>Status:</b> {task.id}
                    </p>
                    <p>
                        <b>Status:</b> {task.status}
                    </p>
                    <p>
                        <b>Completed:</b> {String(task.isCompleted)}
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Detail
