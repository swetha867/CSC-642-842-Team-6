import React from "react";
import "../css/home.css"
import {Link} from 'react-router-dom';


const orderSummary = ()=>{
    return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bgg-light">
            <img className="snap-logo card-img-top" src={require(`../images/snaplogo.png`)} alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    <li className="nav-item active">
                    <a className="nav-link homepage" href="/home">Order Summary <span className="sr-only">(current)</span></a>
                    </li>

                </ul>
                    
            </div>

            <div>
                <ul>
                    <a href="/login"><button type="button" className="btn btn-primary button-space">Login</button></a>

                    <button type="button" className="btn btn-primary button-space">SignUp</button>
                </ul>
            </div>

        </nav>
        {/*home wallpaper */}
        <div className="wallpapered">
            
            {/* search bar */}

            {/* <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </Link>

                <form className="example" action="action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                </form> */}
            <Link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                crossOrigin="anonymous"> </Link>
            
            <div className="container container-order-summary">
            
                <form>
                <div className="row">
                    
                    <div className="col-md-5 offset-md-1">
                        
                        <h2>Payment Method</h2>
                        <h4>Credit/Debit Card</h4>
                        <div className="form-group">
                            <input type="number" className="form-control" id="inputCardNumber" placeholder="Card Number"></input>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputNameOnCard" placeholder="Name on Card"></input>
                        </div>
                        <div className="form-row">
                            <div className="col-4">
                                <select className="form-control" id="inputExpiryMonth">
                                    <option default>Expiry Month</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <select className="form-control" id="inputExpiryYear">
                                    <option default>Expiry Year</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <input type="number" id="inputCVV" placeholder="CVV"></input>
                            </div>
                        </div>

                        <hr></hr>

                        <h2>Delivery Address</h2>
                        <div className="form-group form-row">
                            <div className="col">
                                <input type="text" className="form-control" id="inputFirstName" placeholder="First name"></input>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" id="inputLastName" placeholder="Last name"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="123 Smith St"></input>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" placeholder="San Francisco"></input>
                            </div>
                            <div className="form-group col">
                                <label for="inputZipCode">Zip code</label>
                                <input type="number" className="form-control" id="inputZipCode" placeholder="94000"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputEmail">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="asdf@example.com"></input>
                        </div>
                        <div className="form-group">
                            <label for="inputPhone">Phone Number</label>
                            <input type="text" className="form-control" id="inputPhone" placeholder="(000) 000-0000"></input>
                        </div>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="inputNonContact"></input>
                            <label className="custom-control-label" for="inputNonContact">Non-Contact Delivery <a href="#">Find out how?</a></label>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
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
                        <button className="btn btn-primary btn-lg order-submit-button mx-auto d-block" type="submit">Order</button>
                    </div>

                </div>
                </form>

            </div>
        </div>


        </div>
        

    )



}
export default orderSummary;