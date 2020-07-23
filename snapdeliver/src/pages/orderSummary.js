import React from "react";

const OrderSummary  = ()=>{
    return(
        <div class="container">
            <div class="py-5 text-center">
                <h2>Checkout form</h2>
            </div>

            <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Order Summary</span>
                        <span class="badge badge-secondary badge-pill">2</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 class="my-0">Tacoqueria Steak </h6>
                                <small class="text-muted">Taco x2</small>
                            </div>
                            <span class="text-muted">$7</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
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

                    <form class="card p-2">
                        <div class="input-group">
                            {/* <input type="text" class="form-control" placeholder="Promo code"></input>
                <div class="input-group-append">
                  <button type="submit" class="btn btn-secondary">Redeem</button>
                </div> */}
                            <button class="btn btn-primary btn-lg btn-block" type="submit">Order</button>

                        </div>
                    </form>
                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Payment Method</h4>

                    <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked ></input>
                            <label class="custom-control-label" for="credit">Credit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" ></input>
                            <label class="custom-control-label" for="debit">Debit card</label>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cc-name">Name on card</label>
                            <input type="text" class="form-control" id="cc-name" placeholder="" ></input>
                            <small class="text-muted">Full name as displayed on card</small>
                            <div class="invalid-feedback">
                                Name on card is
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="cc-number">Credit card number</label>
                            <input type="text" class="form-control" id="cc-number" placeholder="" ></input>
                            <div class="invalid-feedback">
                                Credit card number is
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="cc-expiration">Expiration</label>
                            <input type="text" class="form-control" id="cc-expiration" placeholder="" ></input>
                            <div class="invalid-feedback">
                                Expiration date
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="cc-expiration">CVV</label>
                            <input type="text" class="form-control" id="cc-cvv" placeholder="" ></input>
                            <div class="invalid-feedback">
                                Security code
                            </div>
                        </div>
                    </div>
                    <h4 class="mb-3">Delivery address</h4>
                    <form class="needs-validation" novalidate>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" class="form-control" id="firstName" placeholder="" value="" ></input>
                                <div class="invalid-feedback">
                                    Valid first name is .
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" class="form-control" id="lastName" placeholder="" value="" ></input>
                                <div class="invalid-feedback">
                                    Valid last name is .
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="username">Phone Number</label>
                            <div class="input-group">
                                <div class="input-group-addon">
                                    <i class="fa fa-envelope-o"></i>
                                </div>
                                <input type="text" class="form-control" id="Phone Number" placeholder="Username" ></input>
                                <div class="invalid-feedback" style={{"width": "100%"}}>
                                    Your username is .
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email">Email <span class="text-muted">(Optional)</span></label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com"></input>
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" ></input>
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                            <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></input>
                        </div>

                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="country">Country</label>
                                <select class="custom-select d-block w-100" id="country" >
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state">State</label>
                                <select class="custom-select d-block w-100" id="state" >
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control" id="zip" placeholder="" ></input>
                                <div class="invalid-feedback">
                                    Zip code .
                                </div>
                            </div>
                        </div>


                    </form>


                </div>
            </div>


        </div>

    )
}
export default OrderSummary;