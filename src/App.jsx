import { useState } from 'react'
import './App.css'
import { config } from './config/config'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Hello Atul {config.appwriteUrl}</h1>
    </>
  )
}

export default App
