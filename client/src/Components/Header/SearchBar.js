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
          <div onClick={() => setstate("Vehicle Parts")}>vehicle Parts</div>
          <div onClick={() => setstate("Furnitures")}>furnitures</div>
          <div onClick={() => setstate("Electronics")}>electronics</div>
          <div onClick={() => setstate("Mobiles")}>mobiles</div>
          <div onClick={() => setstate("Clothing")}>clothing</div>
          <div onClick={() => setstate("Accessories")}>accessories</div>
          <div onClick={() => setstate("Jobs")}>jobs</div>
          <div onClick={() => setstate("Services")}>services</div>
          <div onClick={() => setstate("Animals")}>animals</div>
          <div onClick={() => setstate("Books")}>books</div>
          <div onClick={() => setstate("Baby products")}>baby products</div>
          <div onClick={() => setstate("Matrimony")}>matrimony</div>
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
