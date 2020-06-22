import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./pages/signup";
import home from "./pages/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
         <Link to="/signUp">Signup</Link>
         <Link to="/home"> home</Link>   
         <Switch>
             <Route path="/signUp" component={Signup} />
             <Route path="/home" component={home} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
