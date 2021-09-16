import React from 'react'
import "./Header.scss"
import { showDropdown, hideDropdown } from "../../Redux/Actions/DropdownAction";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDropDownFill } from 'react-icons/ri'
import { RiArrowDropUpFill } from 'react-icons/ri'
import { useState } from 'react';

const SearchBar = () => {

  const dropdown = useSelector((state) => state.DropdownState)

  const dispatch = useDispatch();

  const openDropdown = () => {
    dispatch(showDropdown());
  };
  const closeDropdown = () => {
    dispatch(hideDropdown());
  };

  const [state, setstate] = useState("Select category")

  return (
    <div className="searchBar">
      <input className="searchBarInput" type="text" placeholder="What are you looking for?" />
      <div className="searchBarSelectContainer">
        <span onClick={() => openDropdown()} className="selectContainerText">{state}</span>
        <div onClick={() => closeDropdown()} id={dropdown ? "showDropdown" : "hideDropdown"} className="selectListContainer">
          <div onClick={() => setstate("1")}>1</div>
          <div onClick={() => setstate("2")}>2</div>
          <div onClick={() => setstate("3")}>3</div>
          <div onClick={() => setstate("4")}>4</div>
          <div onClick={() => setstate("5")}>5</div>
        </div>
        <div className="selectContainerArrow">
          {dropdown
            ? <RiArrowDropUpFill onClick={() => closeDropdown()} size={40} />
            : <RiArrowDropDownFill onClick={() => openDropdown()} size={40} />
          }
        </div>
      </div>
      <button className="searchBarButton">search</button>
    </div>
  )
}

export default SearchBar
