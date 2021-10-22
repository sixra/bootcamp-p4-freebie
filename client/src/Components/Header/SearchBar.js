import React from 'react'
import "./Header.scss"
import { RiArrowDropDownFill } from 'react-icons/ri'
import { RiArrowDropUpFill } from 'react-icons/ri'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAds } from '../../Redux/Actions/AdsAction'
import { useHistory } from "react-router-dom";
import SearchInput from '../../Pages/Freebies/SearchInput';

const SearchBar = () => {

  const [dropdown, setDropdown] = useState(false)
  const buttonHandler = () => {
    setDropdown(current => !current)
  }
  const dispatch = useDispatch();
  const history = useHistory();
  const routeChange = () => {
    history.push("/categories");
  }

  const allAds = useSelector((state) => state.allAds)
  const ads = useSelector((state) => state.allAds.filteredAds);
  const title = useSelector((state) => state.allAds.title);
  const category = useSelector((state) => state.allAds.category);

  const categories = allAds.ads.map((e) => {
    return e.category
  })
  const removeDuplicateCategory = Array.from(new Set(categories)).map((cat) => {
    return cat
  })

  return (
    <div className="searchBar">
      <div className="searchInputContainer">
        <SearchInput placeholder="Search..." data={ads} searchBarStyle="searchInputContainer" />
      </div>
      <div className="searchBarSelectContainer">
        <span onClick={buttonHandler} className="selectContainerText">{allAds.category}</span>
        <div onClick={buttonHandler} id={dropdown ? "showDropdown" : "hideDropdown"} className="selectListContainer">
          <div onClick={() => dispatch(filterAds(allAds.ads, "All products"))}>All products</div>
          {removeDuplicateCategory.map((cat) => (
            <div onClick={() => dispatch(filterAds(allAds.ads, cat))}>{cat}</div>
          ))}
        </div>
        <div onClick={buttonHandler} className="selectContainerArrow">
          {dropdown
            ? <RiArrowDropUpFill size={40} />
            : <RiArrowDropDownFill size={40} />
          }
        </div>
      </div>
      {title !== "" || category !== "Select category" ?
        <button className="searchBarButton" onClick={routeChange}>search</button>
        :
        <button className="searchBarButtonDisabled">search</button>
      }
    </div>
  )
}

export default SearchBar
