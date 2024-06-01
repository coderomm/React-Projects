import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // Staet to keep track of count

  return (
    <div className='App'>
      <header className='app-header'>
        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
      </header>
    </div>
  )
}

export default App
