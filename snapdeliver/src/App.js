import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import signup from "./pages/signup";
import home from "./pages/home";
import login from "./pages/login";
import orderSummary from "./pages/orderSummary";
import restaurantMenu from "./pages/vendor-page";
import vendorHome from "./pages/vendor-home";
import orderConfirmation from "./pages/orderConfirmation";
import orderSummary2 from "./pages/order-summary";


import search from "./pages/search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <Router>
         {/* <Link to="/signup"> Signup</Link>   

         <Link to="/orderSummary"> orderSummary</Link>    */}
        
         <Switch>
             <Route path="/signup" component={signup} />
             <Route exact path="/" component={home} />
             <Route path="/login" component={login} />
             <Route path="/search" component={search} />
             <Route path="/orderSummary" component={orderSummary} />
             <Route path="/restaurantMenu" component={restaurantMenu} />
             <Route path="/vendorHome" component={vendorHome} />
             <Route path="/orderSummary2" component={orderSummary2} />
             <Route path="/orderconfirmation" component={orderConfirmation} />
             {/* <Route path="/orderStatus" component={orderStatus} /> */}
         </Switch>
      </Router>

      <footer class="my-5 pt-5 text-center text-small">
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#">About</a></li>
            <li class="list-inline-item"><a href="#">Services</a></li>
            <li class="list-inline-item"><a href="#">Contact</a></li>
            <li class="list-inline-item"><a href="#">Partner</a></li>

          </ul>
        </footer>
    </div>
  );
}

export default App;
