import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import signup from "./pages/signup";
import home from "./pages/home";
import login from "./pages/login";
import navBar from "./pages/navBar";

import search from "./pages/search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <Router>
         <Link to="/home"> home</Link>  
         <Link to="/signup"> Signup</Link>   

         <Link to="/navBar"> navBar</Link>   
 
         <Switch>
             <Route path="/signup" component={signup} />
             <Route path="/home" component={home} />
             <Route path="/login" component={login} />
             <Route path="/navBar" component={navBar} />
             <Route path="/search" component={search} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
