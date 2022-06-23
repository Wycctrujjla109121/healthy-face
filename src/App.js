import { useEffect, useState } from 'react'
import './App.css'

//  COMPONENTS
import Main from './components/pages/main/Main.jsx'

//  product img
import img0 from './assets/product_1.png'
import img1 from './assets/product_2.png'
import img2 from './assets/product_3.png'

function App() {
  const [states, useStates] = useState([
    {
      priceNew: '1499 р.',
      priceOld: '2199 р.',
      name: 'Phyther',
      img: `${img0}`,
      count: 0,
    },
    {
      priceNew: '999 р.',
      priceOld: '1299 р.',
      name: 'Derma',
      img: `${img1}`,
      count: 0,
    },
    {
      priceNew: '1199 р.',
      priceOld: '1599 р.',
      name: 'Eco-phyther',
      img: `${img2}`,
      count: 0,
    },
  ])
  return (
    <div className="App">
      <Main states={states} useStates={useStates} />
    </div>
  )
}

export default App
