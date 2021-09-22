import React, { useEffect, useState } from "react";
import HeroImage from "../../Components/Header/HeroImage"
import SearchBar from '../../Components/Header/SearchBar'
import { HiOutlineViewGrid } from "react-icons/hi"
import { HiViewList } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../../Redux/Actions/adsAction";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import "./Categories.scss"
import LoginModal from '../LoginLogout/LoginModal.js'
import RegisterModal from '../LoginLogout/RegisterModal.js'
import SingleAd from "./SingleAd";
import { showGridView, hideGridView } from "../../Redux/Actions/ListGridView"

const Categories = () => {

  const loginModal = useSelector((state) => state.LoginModalState)

  const registerModal = useSelector((state) => state.RegisterModalState)

  const ads = useSelector((state) => state.ads);
  const dispatch = useDispatch();

  const gridView = useSelector((state) => state.ListGridViewState)

  const showGrid = () => {
    dispatch(showGridView());
  };

  const hideGrid = () => {
    dispatch(hideGridView());
  };

  useEffect(() => {
    dispatch(getAds());
  }, [dispatch]);

  return (
    <div>
      <HeroImage height="25" minHeight="25" maxHeight="25" />
      <SearchBar />
      {loginModal && <LoginModal />}
      {registerModal && <RegisterModal />}
      <section className="categoriesPageContainer">
        <div className="categoriesAndSearchContainer">
          <div className="searchBarContainer">
            <input type="search" placeholder="Search..." />
          </div>
          <div className="categoriesContainer">
            <div>
              <span>all categories</span>
            </div>
            <div>
              <ul>
                <li>category one</li>
                <li>category one</li>
                <li>category one</li>
                <li>category one</li>
                <li>category one</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="infoTabAndproductsList">
          <div className="infoTabContainer">
            <span>Showing blabla from 10000 products</span>
            <div>
              <HiOutlineViewGrid onClick={showGrid} size={30} />
              <HiViewList onClick={hideGrid} size={30} />
            </div>
          </div>
          <div className="productsListContainer">
            {!ads.length ? (
              <LoadingSpinner />
            ) : (
              <div className={gridView ? "latestAdsContain" : null}>
                {ads.map((adInfo) => (
                  <SingleAd key={adInfo._id} adInfo={adInfo} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>


    </div>
  )
}

export default Categories
