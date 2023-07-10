

import { useState } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className='container'> 
//       <h1>Learning Reactjs From react.dev</h1>
//     </div>
//   );
// }

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];


// // export { App };
// export default function ShoppingList() {
//   const listItems = products.map(ele =>
//     <li
//       key={ele.id}
//       style={{
//         color: ele.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {ele.title}
//     </li>
//   );

//   return (
//     <ul>{listItems}</ul>
//   );
// }
export default function Myapp() {
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    setCount(count+1);
  };
  return(
  <div>
    <h1>Counters that update</h1>
      <Mybutton count={count} onClick={handleClick} />
      <Mybutton count={count} onClick={handleClick} />

    </div>
  )
}

function Mybutton({count,onClick}) {
  return (
    <button onClick={onClick}>Clicked { count} times</button>
  )
}