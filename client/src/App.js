import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/freebies" exact component={Freebies} />
          <Route path="/user/ads" exact component={ MyAds } />
          <Route path="/user/profile" exact component={ Profile } />
          <Route path="/user/post" exact component={ PostAd } />
          <Route path="/user/favorite" exact component={ MyFavorites } />
          <Route path="/contact" exact component={ Contact } />
          <Route path="/auth" exact component={ AuthForm } />
          <Route path="/user/forgot" exact component={ForgotPassword} />
          <Route path="/api/activate/user/:id" exact component={UserActivate} />
          <Route path="/user/reset/:hash" exact component={ResetPassword} />
          <Route path="/ad/:id" exact component={ AdDetails } />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
        <ScrollUp />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
