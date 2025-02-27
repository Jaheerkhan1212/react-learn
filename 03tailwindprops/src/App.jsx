import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
const myobj={
  name:"ken",
  state:"rajasthan"
}
const myArr=[1,2,3]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      {/* <Card username="jaheer" someobj={myobj} myarray={myArr}/> */}
      <Card username="jaheer" img="https://images.pexels.com/photos/30445309/pexels-photo-30445309/free-photo-of-historic-waterfront-buildings-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Card username="Abid" img="https://images.pexels.com/photos/17140043/pexels-photo-17140043/free-photo-of-portrait-of-a-young-man-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    </>
  )
}

export default App
