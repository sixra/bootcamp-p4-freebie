import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./Redux/Store";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
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

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <HeroImage height="15" minHeight="15" maxHeight="25" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/user/ads" exact component={MyAds} />
          <Route path="/user/dashboard" exact component={Dashboard} />
          <Route path="/user/post" exact component={PostAd} />
          <Route path="/user/favorite" exact component={MyFavorites} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/auth" exact component={AuthForm} />
          <Route path="/user/forgot" exact component={ForgotPassword} />
          <Route path="/Api/activate/user/:id" exact component={UserActivate} />
          <Route path="/user/reset/:hash" exact component={ResetPassword} />
        </Switch>
        <ScrollUp />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
