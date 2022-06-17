import React from 'react'
import Cards from './components/Cards'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cards />
    </div>
  )
}

export default App