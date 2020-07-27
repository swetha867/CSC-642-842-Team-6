import React from "react";
import "../css/home.css"
import {Link} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

import OrderMap from './orderMap';

const defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
};

const orderConfirmation = () => {
    return(
        // <div className="col"><h1>Order Confirmation</h1></div>
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bgg-light">
                <img class="snap-logo card-img-top" src={require(`../images/snaplogo.png`)} alt=""/>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                        <a class="nav-link homepage" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <a href="/login"><button type="button" class="btn btn-primary button-space">Login</button></a>
                        <button type="button" class="btn btn-primary button-space">SignUp</button>
                    </ul>
                </div>
            </nav>


            <div className="row">
                <div className="col col-md-6">
                    <h2>Order Confirmation</h2>
                    <p>Thank you for your Order with Rice Bowls, Inc</p>
                    <p>Order 697709992222</p>
                    <p>July 1, 2020 5:00 PM</p>

                    
                    <div className="order-summary-list">
                            <h4>Order Summary</h4>
                            <hr></hr>
                            <div className="row order-summary-item">
                                <div className="col-3 order-summary-image">
                                    <img className="img-fluid" src={require('../images/taco.jpg')}></img>
                                </div>
                                <div className="col-6">Item Name</div>
                                <div className="col-3">$0.00</div>
                            </div>
                            <div className="row order-summary-item">
                                <div className="col-3 order-summary-image">
                                    <img className="img-fluid" src={require('../images/taco.jpg')}></img>
                                </div>
                                <div className="col-6">Item Name</div>
                                <div className="col-3">$0.00</div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-6">Sub Total</div>
                                <div className="col-6">$0.00</div>
                            </div>
                            <div className="row">
                                <div className="col-6"><strong>Order Total</strong></div>
                                <div className="col-6"><strong>$0.00</strong></div>
                            </div>
                        </div>

                </div>
                <div className="col col-md-6">
                    <h1>Delivery Details</h1>

                    <p className="lead">You Delivery will arrive in 20 minutes </p>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" styleName="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
        
                    <p>no-contact delivery</p>

                    <dl class="row">
                        <dt class="col-sm-3">Driver Name</dt>
                        <dd class="col-sm-9">David L.</dd>

                        <dt class="col-sm-3">Driver Phone</dt>
                        <dd class="col-sm-9">(123) 456-7890</dd>


                    </dl>

                    Delivery Address:
                    Spauenge Bawb
                    777 Hope Street
                    Los Angeles, CA 94111 

                    {/* // Important! Always set the container height explicitly */}
                    <div style={{ height: '500px', width: '100%' }}>
                        <OrderMap />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default orderConfirmation;