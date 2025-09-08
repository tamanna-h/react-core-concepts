
import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';


// const fecthUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fecthPosts = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

function App() {
  // const friendsPromise = fetchFriends();
  // const postsPromise = fecthPosts();

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
      <Players />

      {/* <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise = {postsPromise}/>
      </Suspense> */}

      {/* <Suspense fallback={<h4>Loading...</h4>}>
        <Users fetchUsers={fecthUsers} />
      </Suspense> */}

      {/* <Suspense fallback={<h4>Friends are coming...</h4>}>
        <Friends friendsPromise = {friendsPromise}/>
      </Suspense> */}


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
  );
}

export default App
