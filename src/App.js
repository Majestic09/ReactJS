

import './App.css';

function App() {
  return (
    <div className='container'> 
      <h1>Learning Reactjs From react.dev</h1>
    </div>
  );
}

const user = {
  name: "Dino Moria",
  imageUrl : "https://m.media-amazon.com/images/I/31mnNQ-grFL.jpg",
  imageSize : 90
}
function Mybutton() {
  return (
    <button >I'm a button</button>
  )
}


export { App };
export default function Myapp() {
  
  return <div className='box'>
    <App/>
    <h1>{user.name}</h1>
    <img src={ user.imageUrl} alt={"Image of Harry" + user.name} style={{width:user.imageSize,height:user.imageSize}} />
    <Mybutton />
  </div>
}
