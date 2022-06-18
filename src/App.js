import React from 'react'
import Cards from './components/Cards'
import Home from './components/Home'
import Navbar from './components/Navbar'
import QaDpartment from './components/QaDpartment'
import QaStandard from './components/QaStandard'
import QualityControl from './components/QualityControl'
import RecomendDevstack from './components/RecomendDevstack'

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
    </div>
  )
}

export default App