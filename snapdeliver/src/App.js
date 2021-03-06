import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import signup from "./pages/signup";
import home from "./pages/home";
import login from "./pages/login";

import orderSummary from "./pages/orderSummary";
import myMarker from "./pages/Marker";
import search from "./pages/search";
import restaurantMenu from "./pages/vendor-page";
import vendorHome from "./pages/vendor-home";
import orderConfirmation from "./pages/orderConfirmation";
import orderSummary2 from "./pages/order-summary";
import signupvendor from "./pages/signupvendor";
import userAccount from "./pages/userAccount";
import vendorLogin from "./pages/vendorLogin";
import orderHistory from "./pages/orderHistory";
import vendororderlist from "./pages/vendorOrderList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
    return (
        <div>
            <Router>

                <Switch>
                    <Route path="/signup" component={signup} />
                    <Route exact path="/" component={home} />
                    <Route path="/login" component={login} />
                    <Route path="/search" component={search} />
                    <Route path="/orderSummary" component={orderSummary}/>
                    <Route path="/mymarker" component={myMarker}/>
                    <Route path="/restaurantMenu" component={restaurantMenu} />
                    <Route path="/vendorHome" component={vendorHome} />
                    <Route path="/orderSummary2" component={orderSummary2} />
                    <Route path="/signupvendor" component={signupvendor}/>
                    <Route path="/orderconfirmation" component={orderConfirmation} />
                    <Route path="/userAccount" component={userAccount} />
                    <Route path="/vendorLogin" component={vendorLogin} />
                    <Route path="/orderStatus" component={orderConfirmation} />
                    <Route path="/orderHistory" component={orderHistory} />
                    <Route path="/vendororderlist" component={vendororderlist} />

                </Switch>
            </Router>
            <footer className="my-5 pt-5 text-center text-small">
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Services</a></li>
                    <li className="list-inline-item"><a href="#">Contact</a></li>
                    <li className="list-inline-item"><a href="#">Partner</a></li>

                </ul>
            </footer>
        </div>
    );

}

export default App;
