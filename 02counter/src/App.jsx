import { useState } from 'react'   //hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const removevalue=()=>{
  console.log('value added',Math.random());
  // counter++;
}
function App() {
  const addValue=()=>{
    console.log('value added',counter);
    if(counter<20)setCounter(counter+1);
  }
  const removeValue=()=>{
    console.log('value added',counter);
    if(counter>0)setCounter(counter-1);
  }
  let [counter, setCounter] = useState(15)
  //useState update whole ui according to new value and two variable it give are variable and function to set variable and set conventions according to you
// let counter =5;
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter is : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <br />

      <button onClick={removeValue}>Remove value</button>
        </>
  )
}

export default App
