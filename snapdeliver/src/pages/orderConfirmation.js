import React, { Component } from 'react';
import "../css/home.css"
import {Link} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


import OrderMap from './orderMap';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class orderConfirmation extends Component {
    static defaultProps = {
        center: {
            address: '1600 Holloway Ave, San Francisco, california.',
            lat: 37.7241,
            lng: -122.4799
        },
        zoom: 17
    };

    render() {

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
        <a class="nav-link homepage" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        
        
        </ul>
        
        </div>
        
        <div>
        <ul>
        
        <a href="/orderSummary2"><button type="button" class="btn btn-primary button-space">cart</button></a>
        
        <a href="/userAccount"><button type="button" class="btn btn-primary button-space" onClick="/signup">My Account</button></a>
        <a href="/orderHistory"><button type="button" class="btn btn-primary button-space" onClick="/orderHistory">My Orders</button></a>

        <button type="button" class="btn btn-primary button-space">Log out</button>

        </ul>
        </div>
        </nav>
            <div class="card" style={{"flex-grow": "2"}}>
            <div class="card-body align-items-center d-flex justify-content-center">

            <div className="row text-center h-100" >
                <div className="col">
                <h1 class="h3 mb-3 font-weight-normal">Order Confirmation</h1>
                    <p>Thank you for your Order with Rice Bowls, Inc</p>
                    <p>Order #697709992222</p>
                    <p>July 1, 2020 5:00 PM</p>

{/*                     
                    <div className="order-summary-list">
                            <h4>Order Summary</h4>
                            <hr></hr>
                            <div className="row order-summary-item">
                                <div className="col-3 order-summary-image">
                                    <img className="img-fluid" src={require('../images/taco.jpg')}></img>
                                </div>
                                <div className="col-6">Tacoqueria Steak</div>
                                <div className="col-3">$7.00</div>
                            </div>
                            <div className="row order-summary-item">
                                <div className="col-3 order-summary-image">
                                    <img className="img-fluid" src={require('../images/taco.jpg')}></img>
                                </div>
                                <div className="col-6">Tacoqueria Beef</div>
                                <div className="col-3">$7.00</div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-6">Sub Total</div>
                                <div className="col-6">$14.00</div>
                            </div>
                            <div className="row">
                                <div className="col-6"><strong>Order Total</strong></div>
                                <div className="col-6"><strong>$15.88</strong></div>
                            </div>
                        </div>

                </div> */}

                <div className="col">
                    <h2>Delivery Details</h2>

                    <p className="lead">You Delivery will arrive in 20 minutes </p>
                  
                    </div>
                    <div class="progress"> <div class="progress-bar bg-primary" role="progressbar" style={{"width": "42%" }}aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div> </div>

                    <p>No-contact delivery</p>

                    <dl class="row">
                        <dt class="col-sm-5">Driver Name</dt>
                        <dd class="col-sm-5">David L.</dd>

                        <dt class="col-sm-5">Driver Phone</dt>
                        <dd class="col-sm-5">(123) 456-7890</dd>


                    </dl>

                    Delivery Address:
                    <p>Spauenge Bawb</p>
                    <p>777 Hope Street</p>
                    <p>Los Angeles, CA 94111 </p>

                    {/* // Important! Always set the container height explicitly */}
                    <div style={{ height: '500px', width: '100%' }}>
                        {/* <OrderMap /> */}
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyB0_jZgDE6q76UZAL90qkZgQrR8UlwW3nE'}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        /* distance to mouse is to check places whenever mouse pointer moves */
                        distanceToMouse={()=>{}}
                    >
                        <Marker
                            lat={37.7241}
                            lng={-122.4799}
                            name="My Marker"
                            color="red"
                        />

                    </GoogleMapReact>
                    </div>
                </div>
            </div>
            </div>
</div>
        </div>
    )
}
}

export default orderConfirmation;