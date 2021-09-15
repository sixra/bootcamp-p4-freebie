import React from 'react'
import HomeListingBtn from '../../../Components/HomeListingBtn'
import "./Header.scss"
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className="Header" >
      <SearchBar />
      <HomeListingBtn />
    </div>
  )
}

export default Header
