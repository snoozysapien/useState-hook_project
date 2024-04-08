import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  //to propogate changes on UI, default value is 15
  //counter is a variable and set counter is function responsible
  // for updation of variable


  //let counter = 5
  const addValue = () => {
    console.log("clicked", Math.random());
    //counter = counter+1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("clicked", Math.random());
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
    //here if we change the value of counter by adding or
    //removing no. then on interface it would change on 4 places
    //simultaneously. So, here comes the react, so that on single 
    //click multiple changes can occur or update.
    //this can be done through hooks
    //in short, ui updation ko react control krta h 

  )
}

export default App
