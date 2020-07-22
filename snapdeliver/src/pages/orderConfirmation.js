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

        <div className="row">
            <div className="col col-md-6">
                
                Thank you for your Order with Rice Bowls, Inc

                Order #697709992222 on July 1, 2020 5:00 PM
                You Delivery will arrive in 20 minutes 

            </div>
            <div className="col col-md-6">
                <h3>Delivery Details</h3>
                <div class="progress">
                    <div className="progress-bar" role="progressbar"  aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    {/* <div className="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div> */}
                </div>
    
                Driver Name: David    Driver Phone Number : 000-000-0000
                <p>Services: no-contact delivery</p>

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
    )
}

export default orderConfirmation;