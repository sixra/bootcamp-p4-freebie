import React from 'react'
import "./Header.scss"
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className="Header">
      <SearchBar />
      <h1>Listing made easy</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, officiis.</p>
      <button>start</button>
    </div>
  )
}

export default Header
