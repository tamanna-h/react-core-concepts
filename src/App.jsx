
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'

function App() {

  // function handleClick() {
  //   console.log('clicked')
  // }

  // const handleClick3 = () => {
  //   console.log('clicked 3')
  // }

  // const handleAdd5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // }

  return (
    <>
      <h1>React Core Concepts</h1>
      
      {/* <Counter /> */}

      <Batsman />

      {/* <button onclick="handleClick">Click Me</button> 
      This will not work coz this js way*/}

      {/* <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2() {
        alert('clicked 2')
      }}>Click Me 2</button> 

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => console.log('clicked 4')}>Click Me 4</button>

      <button onClick={() => handleAdd5(10)}>Click add 5</button> */}
    </>
  )
}

export default App
