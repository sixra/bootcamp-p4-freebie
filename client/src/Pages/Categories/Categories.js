import React, { useEffect } from "react";
import HeroImage from "../../Components/Header/HeroImage"
import SearchBar from '../../Components/Header/SearchBar'
import { HiOutlineViewGrid } from "react-icons/hi"
import { HiViewList } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../../Redux/Actions/adsAction";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import LatestAd from "../Home/LatestAds/LatestAd/LatestAd";
import "./Categories.scss"
import LoginModal from '../LoginLogout/LoginModal.js'
import RegisterModal from '../LoginLogout/RegisterModal.js'

const Categories = () => {

  const loginModal = useSelector((state) => state.LoginModalState)
  const registerModal = useSelector((state) => state.RegisterModalState)
  const ads = useSelector((state) => state.ads);
  const dispatch = useDispatch();

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
              <HiOutlineViewGrid size={30} />
              <HiViewList size={30} />
            </div>
          </div>
          <div className="productsListContainer">
            {!ads.length ? (
              <LoadingSpinner />
            ) : (
              <div className="latestAdsContainer">
                <div className="latestAds">
                  {ads.map((adInfo) => (
                    <LatestAd key={adInfo._id} adInfo={adInfo} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


    </div>
  )
}

export default Categories
