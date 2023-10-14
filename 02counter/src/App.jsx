import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(12)

  const addValue = () => {
    setCounter(count + 1)
  }

  const removeVal = () => {
    setCounter(count - 1);
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Change the Value : {count} </h2>
      <button onClick={addValue}>Add value:{count}</button>
      <br />
      <button onClick={removeVal}>Remove value:{count}</button>

      <p>Fotter:{count}</p>
    </>
  )
}

export default App
