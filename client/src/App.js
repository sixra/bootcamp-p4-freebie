import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import AdDetails from "./Components/AdDetails/AdDetails";
import AuthForm from "./Components/AuthForm/AuthForm";
import Footer from "./Components/Footer/Footer";
import ForgotPassword from "./Components/Forgot-Reset-Password/ForgotPassword";
import ResetPassword from "./Components/Forgot-Reset-Password/ResetPassword.js";
import HeroImage from "./Components/Header/HeroImage";
import Navigation from "./Components/Navigation/Navigation";
import PathBanner from "./Components/PathBanner/PathBanner";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import UserActivate from "./Components/UserActivated/UserActivate.js";
import MyAds from "./Components/UserInterface/UserSections/MyAds/MyAds";
import MyFavorites from "./Components/UserInterface/UserSections/MyFavorites/MyFavorites";
import PostAd from "./Components/UserInterface/UserSections/PostAd/PostAd";
import Profile from "./Components/UserInterface/UserSections/Profile/Profile";
import Contact from "./Pages/Contact/Contact";
import Freebies from "./Pages/Freebies/Freebies";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { getAds } from "./Redux/Actions/AdsAction";
import { loadUser } from "./Redux/Actions/AuthAction";
import store from "./Redux/Store";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    store.dispatch(getAds());
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <PathBanner />
        <HeroImage height="50" minHeight="50" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/freebies" element={<Freebies />} />
          <Route path="/user/ads" element={<MyAds />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/post" element={<PostAd />} />
          <Route path="/user/favorite" element={<MyFavorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/user/forgot" element={<ForgotPassword />} />
          <Route path="/api/activate/user/:id" element={<UserActivate />} />
          <Route path="/user/reset/:hash" element={<ResetPassword />} />
          <Route path="/ad/:id" element={<AdDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ScrollUp />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
