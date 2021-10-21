import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./Redux/Store";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Freebies from "./Pages/Freebies/Freebies";
import Contact from "./Pages/Contact/Contact";
import AuthForm from "./Components/AuthForm/AuthForm";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import Footer from "./Components/Footer/Footer";
import { loadUser } from "./Redux/Actions/AuthAction";
import UserActivate from "./Components/UserActivated/UserActivate.js"
import ForgotPassword from "./Components/Forgot-Reset-Password/ForgotPassword"
import ResetPassword from "./Components/Forgot-Reset-Password/ResetPassword.js"
import HeroImage from "./Components/Header/HeroImage";
import Dashboard from "./Components/UserInterface/UserSections/Dashboard/Dashboard";
import PostAd from "./Components/UserInterface/UserSections/PostAd/PostAd";
import MyAds from "./Components/UserInterface/UserSections/MyAds/MyAds";
import MyFavorites from "./Components/UserInterface/UserSections/MyFavorites/MyFavorites";
import AdDetails from "./Components/AdDetails/AdDetails";
import { getAds } from "./Redux/Actions/AdsAction";
import PathBanner from "./Components/PathBanner/PathBanner";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy"
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

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
          <Route path="/user/dashboard" exact component={ Dashboard } />
          <Route path="/user/post" exact component={ PostAd } />
          <Route path="/user/favorite" exact component={ MyFavorites } />
          <Route path="/contact" exact component={ Contact } />
          <Route path="/auth" exact component={ AuthForm } />
          <Route path="/user/forgot" exact component={ForgotPassword} />
          <Route path="/Api/activate/user/:id" exact component={UserActivate} />
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
