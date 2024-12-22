import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "hitesh",
    age: 20
  }


let newArr = [1, 2, 3, 4]


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>


      {/* <Card />
      <Card username="chaiaurcode" /> */}
      {/* props {}
      props {channel: 'chaiaurcode'} */}

      {/* <Card name="yash" obj:myObj /> 
       props {name: 'yash', obj:myObj: true} */}

      {/* <Card name="yash" obj={myObj} />  */}
      {/* props {name: 'yash', obj: {…}} */}

      {/* <Card name="yash" obj={myObj} arr={newArr} />  */}
      {/* props {name: 'yash', obj: {…}, arr: Array(4)} */}




      {/* <Card />  */}
      {/* undefined */}


      {/* <Card username="hitesh" /> */}
      {/* hitesh  */}

      <Card username="yash" btnText="click-me"/>
      <Card username="qwerty" btnText="click-me"/>
      <Card username="Default" />
      

    </>
  )
}

export default App
