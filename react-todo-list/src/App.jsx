import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState();

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput('');
    }
  }
  const handleToggleTask = (index) => {
    const newTask = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTask);
  }
  return (
    <div className='App'>
      <header className="app-header">
        <h1>My To-Do List</h1>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add a new task' />
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => {
            return <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task}
              <button onClick={() => handleToggleTask(index)}>Toggle Complete</button>
            </li>
          })}
        </ul>
      </header>
    </div>
  )
}

export default App
