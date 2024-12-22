import Chai from "./Chai"


function App() {
  
  const username = "hitesh"

  return (
    // <h1>Chai aur React | Vite</h1>
    // <Chai/>
    // can return only 1 element
    // therefore enclose in a div / fragment
    <>
      <Chai/>
      <p>This is a para {username}</p>  
      {/* we can use variables using {evaluated expression}  */}
      <h4>this is h4</h4>
    </>
  )
}

export default App
