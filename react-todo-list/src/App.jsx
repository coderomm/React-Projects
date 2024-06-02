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
          <li>List:</li>
          {tasks.map((task, index) => {
            <li key={index}>{task}</li>
          })}
        </ul>
      </header>
    </div>
  )
}

export default App
