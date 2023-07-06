import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react' 4.1k (gzipped : 1.8k)
import './card.css'
import './App.css'
import { Card } from './components/card/card'

function App() {
 
  const data = []
  return (
    
      <div className="container">
        <h1>Cardápio</h1>
        <div className="card-grid">
          {data.map(foodData => <Card/>)}
        </div>
      </div>
    
  )
}

export default App
