import React from 'react'
import CategoriesInner from './Categories/CategoriesInner.js'
import Process from './Process/Process.js'
import SearchBar from '../../Components/Header/SearchBar'
import HomeListingBtn from '../../Components/Header/HomeListingBtn'
import HeroImage from "../../Components/Header/HeroImage"
import LatestAds from "./LatestAds/LatestAds";
import LoginModal from '../LoginLogout/LoginModal.js'
import { useSelector } from "react-redux";
import RegisterModal from '../LoginLogout/RegisterModal.js'

const Home = () => {

  const loginModal = useSelector((state) => state.LoginModalState)
  const registerModal = useSelector((state) => state.RegisterModalState)

  return (
    <div className="Home">
      {/* <HeroImage height="60" />
      <SearchBar /> */}
      {loginModal && <LoginModal />}
      {registerModal && <RegisterModal />}
      <HomeListingBtn />
      <CategoriesInner />
      <Process />
      <LatestAds />
    </div>
  );
};

export default Home;
