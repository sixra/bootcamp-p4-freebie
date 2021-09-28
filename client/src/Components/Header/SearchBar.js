import React from 'react'
import "./Header.scss"
import { RiArrowDropDownFill } from 'react-icons/ri'
import { RiArrowDropUpFill } from 'react-icons/ri'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAds } from '../../Redux/Actions/AdsAction'


const SearchBar = () => {

  const [dropdown, setDropdown] = useState()
  const dispatch = useDispatch();

  const allAds = useSelector((state) => state.allAds)
  const categories = allAds.ads.map((e) => {
    return e.category
  })
  const removeDuplicateCategory = Array.from(new Set(categories)).map((cat) => {
    return cat
  })

  const searchBarAds = allAds.ads.map((ad) => {
    return ad.title
  })
  const removeDuplicateAds = Array.from(new Set(searchBarAds)).map((ad) => {
    return ad
  })

  return (
    <div className="searchBar">
      <div className="searchInputContainer">
        <input
          className="searchBarInput"
          type="text"
          placeholder="What are you looking for?"
        />
        <div className="searchBarResults">
          {removeDuplicateAds.map((ad) => (
            <div onClick={() => dispatch(filterAds(allAds.filteredAds, ad))}>{ad}</div>
          ))}
        </div>
      </div>
      <div className="searchBarSelectContainer">
        <span onClick={() => setDropdown()} className="selectContainerText">{allAds.category}</span>
        <div onClick={() => setDropdown()} id={dropdown ? "showDropdown" : "hideDropdown"} className="selectListContainer">
          <div onClick={() => dispatch(filterAds(allAds.ads, "All products"))}>All products</div>
          {removeDuplicateCategory.map((cat) => (
            <div onClick={() => dispatch(filterAds(allAds.ads, cat))}>{cat}</div>
          ))}
        </div>
        <div className="selectContainerArrow">
          {dropdown
            ? <RiArrowDropUpFill onClick={() => setDropdown(false)} size={40} />
            : <RiArrowDropDownFill onClick={() => setDropdown(true)} size={40} />
          }
        </div>
      </div>
      <button className="searchBarButton">search</button>
    </div>
  )
}

export default SearchBar
