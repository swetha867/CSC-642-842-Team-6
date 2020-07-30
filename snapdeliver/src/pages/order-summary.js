import React from "react";
import "../css/home.css"
import {Link} from 'react-router-dom';


const orderSummary = ()=>{
    return(
    <div>
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
        <button type="button" class="btn btn-primary button-space">Log out</button>

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
                            <div class="col-md-4 mb-3">
                            <input type="text" class="form-control" id="cc-cvv" placeholder="CVV" ></input>
     
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
                            {/* <h4>Order Summary</h4>
                            <hr></hr>
                            <div className="row order-summary-item">
                                <div className="col-3 order-summary-image">
                                    <img className="img-fluid" src={require('../images/taco.jpg')}></img>
                                </div>
                <div>
                                <h6 class="my-0">Tacoqueria Steak </h6>
                  <small class="text-muted">Taco x2</small>   
                  </div>
                 </div>                     
                                <div className="col-3">$7.00</div>
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
                    </div> */}
 <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Order Summary</span>
              <span class="badge badge-secondary badge-pill">2</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div className="order-summary-image">
                                    <img className="img-fluid" src={require('../images/taco.jpg')} style={{"width":"105.93px"}}></img>
                </div>
                <div>

                  <h6 class="my-0">Tacoqueria Steak </h6>
                  <small class="text-muted">Taco x2</small>
                </div>
                <span class="text-muted">$7</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div className="order-summary-image">
                                    <img className="img-fluid" src={require('../images/taco.jpg')} style={{"width":"105.93px"}}></img>
                </div>
                <div>
                  <h6 class="my-0">Tacoqueria Beef </h6>
                  <small class="text-muted">Nacho</small>
                </div>
                <span class="text-muted">$7</span>
              </li>
             
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                  <h6 class="my-0">Sub Total</h6>
                </div>
                <span class="text-success">$14</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Order Total (USD)</span>
                <strong>$15.88</strong>
              </li>
             
            </ul>
                {/* <input type="text" class="form-control" placeholder="Promo code"></input>
                <div class="input-group-append">
                  <button type="submit" class="btn btn-secondary">Redeem</button>
                </div> */}
                        <a href="/orderconfirmation"><button class="btn btn-primary btn-lg btn-block" type="submit">Order</button></a>

                </div></div></div>
</div>
            </div>
        </div>


        

    )



}
export default orderSummary;