
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React, { StrictMode } from 'react';


function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


const ReactElement = React.createElement(
  'a', // tag
  {href: 'google.com', target: '_blank'}, // object / props(attributes)
  'click here to visit google' // direct text (children/ inner content)

)


const globalVar = "another variable"

const ReactElement2 = React.createElement(
  'a', // tag
  {href: 'google.com', target: '_blank'}, // object / props(attributes)
  'click here to visit google', // direct text (children/ inner content)
  globalVar // -> ✅ // -> evaluated expression✅, if/else ❌
)


createRoot(document.getElementById('root')).render(
  
    // <App />


    // <MyApp/> // -> can be rendered ✅
    // MyApp() // -> can be rendered ✅, not preferred


    // <ReactElement/> // -> ❌
    // ReactElement() // -> ❌
    // since it is an object, not fxn

    // ReactElement
    // // Objects are not valid as a React child (found: object with keys {type, props, children}). 
    // // If you meant to render a collection of children, use an array instead.
    // this react element had our coustom render code, but here ir uses render of react


    // anotherElement // -> ✅, since it is not custon 


    // ReactElement // -> ✅


    ReactElement2 // -> ✅
  
)
