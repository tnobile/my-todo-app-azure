export async function getAllTasks() {
    const response = await fetch('/api/todos');
    return await response.json();
}

export async function createTask(data) {
    console.log(`createTask:${data.task}`);
    const response = await fetch(`/api/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: data })
    })
    return await response.json();
}

export async function deleteTask(taskId) {
    const response = await fetch(`/api/todo/${taskId}`, { method: 'DELETE' })
    return await response.json();
}

export async function editTask(data) {
    console.log(`editTask:${JSON.stringify(data)}`);
    const response = await fetch(`/api/todo`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: data })
    })
    return await response.json();
}

export async function resetTasks() {

    const response = await fetch(`/api/todo/`, { method: 'DELETE' })
    return await response.json();
}
export async function fetchSettings() {

    const response = await fetch('/api/settings');
    return await response.json();
}

