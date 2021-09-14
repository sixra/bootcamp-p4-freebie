import React from 'react'
import CategoriesInner from './Categories/CategoriesInner.js'
import Process from './Process/Process.js'
import Header from './Header/Header'

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <CategoriesInner/>
      <Process/>
    </div>
  )
}

export default Home
