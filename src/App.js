import React from 'react'
import Cards from './components/Cards'
import Home from './components/Home'
import Navbar from './components/Navbar'
import QaDpartment from './components/QaDpartment'
import QualityControl from './components/QualityControl'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cards />
      <QualityControl />
      <QaDpartment />
    </div>
  )
}

export default App