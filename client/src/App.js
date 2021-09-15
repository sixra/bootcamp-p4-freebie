import React from 'react'
import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Categories from './Pages/Categories/Categories'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Navigation from './Components/Navigation/Navigation'
import GoogleMap from './Components/GoogleMap/GoogleMap'


const App = () => {
  return (
    <div className="App">
      <Router>
        <main>
          <Navigation />
          <GoogleMap/>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App
