import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([])

    function handleAddTask(e) {
        e.preventDefault()
        let taskValue = document.getElementById('task-input').value
        if (taskValue.trim() !== "") {

            setTasks(t => [...t, taskValue])

            /* to clear input field after click */
            let taskDOM = document.getElementById('task-input')
            taskDOM.value = ''

        }
    }
    function deleteTask(index) {
        const updatedTasks = t => t.filter((_, i) => i != index)
        setTasks(updatedTasks)
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]]

            setTasks(updatedTasks)
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]

            setTasks(updatedTasks)
        }
    }

    return (
        <>
            <h1>To-do List</h1>
            <div className='adders'>
                <form onSubmit={handleAddTask}>
                    <input type="text" id='task-input' />
                    <button className='add-btn' onSubmit={handleAddTask}>Add Task</button> 
                </form>
            </div>


            <ol className="task-container">
                {tasks.map((task, index) => <li key={index}>
                    <span className='task-text'>{task}</span>
                    <div>
                        <button className='del-btn' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-btn' onClick={() => moveTaskUp(index)}>👆</button>
                        <button className='move-btn' onClick={() => moveTaskDown(index)}>👇</button>
                    </div>
                </li>)}
            </ol>
        </>

    )
}

export default App
