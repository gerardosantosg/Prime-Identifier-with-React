import React from 'react'
import './App.css'

// import components

import Prime from './components/Prime'

function App() {
  return (
    <div className='App'>
      <h1>Prime Number Identifier</h1>
      <h2>Prime Numbers will be red!</h2>
      <Prime />
    </div>
  )
}

export default App
