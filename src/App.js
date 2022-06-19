import React from 'react'
import Cards from './components/Cards'
import Generic from './components/Generic'
import Home from './components/Home'
import Navbar from './components/Navbar'
import QaDpartment from './components/QaDpartment'
import QaStandard from './components/QaStandard'
import QualityControl from './components/QualityControl'
import RecomendDevstack from './components/RecomendDevstack'
import Staff from './components/Staff'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cards />
      <QualityControl />
      <QaDpartment />
      <QaStandard />
      <RecomendDevstack />
      <Staff />
      <Generic />
    </div>
  )
}

export default App