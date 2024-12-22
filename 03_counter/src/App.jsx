import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // hook ->> updates var @ all places
  let [counter, setCounter] = useState(15) // [var, fxn to update var]
  
  // const ❌ let ✅
  // let counter = 15

  const addValue = () => {
    // console.log("fxn working");  
    // counter+=1
    // console.log(counter); // -> value is updated, but does not reflect on screen
    
    // counter+=1
    // setCounter(counter)
    // // -> ✅ 

    setCounter(counter+1) // -> ✅
    
  }

  const removeValue = () => {
    // setCounter(counter-1) // -> ✅

    counter-=1
    setCounter(counter)
    // -> ✅
  }


  // check limit [0,20] *** : assignment



  return (
    <>
      <h1>Chai aur counter {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
