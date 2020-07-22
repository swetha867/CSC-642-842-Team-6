import React from "react";
import "../css/home.css"
import {Link} from 'react-router-dom';

const orderConfirmation = ()=>{
    return(
        <div className="row">
            <div className="col col-md-6">
                <h1>Order Confirmation</h1>
                Thank you for your Order with Rice Bowls, Inc

                Order #697709992222 on July 1, 2020 5:00 PM
                You Delivery will arrive in 20 minutes 


                <h3>Delivery Details</h3>
                Driver Name: David    Driver Phone Number : 000-000-0000
                Services: no-contact delivery
                Delivery Address:
            </div>
        </div>
    )
}

export default orderConfirmation;