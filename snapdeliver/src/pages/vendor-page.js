import React from "react";
import "../css/home.css"
import {Link} from 'react-router-dom';


const vendorPage = ()=>{
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
                    <a class="nav-link homepage" href="/home">Vendor Home <span class="sr-only">(current)</span></a>
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
        {/*home wallpaper */}
        <div class="wallpapered">
            
            {/* search bar */}

            {/* <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </Link>

                <form class="example" action="action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                </form> */}
            <Link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                crossOrigin="anonymous"> </Link>
            
            <div className="container container-vendor-page">
            
                <div className="row">
                    <div className="col-12 col-sm-10">
                        <h2>Sticky Rice Cafe</h2>
                        <span class="badge badge-pill badge-info">Modern Asian</span>
                        <span class="badge badge-pill badge-info">Vegetarian</span>
                        <span class="badge badge-pill badge-info">Popular with Students</span>

                    </div>

                    <div className="col-12 col-sm-2 vendor-rating">4.5 stars</div>

                    <div className="col-12 vendor-header"></div>
                    <div className="col-12 col-md-7">
                        <p>0.4 miles from SFSU</p>
                        <p>
                            Pick Up: 15 Min, Free <br></br>
                            Delivery: 30 Min, $5 minimum
                        </p>
                        <address className="vendor-address">
                            1300 Buckingham Way <br></br>
                            San Francisco, CA 94132
                        </address>
                    </div>
                    <div className="col-12 col-md-5" id="map"></div>
                    <div className="col-12 col-md-8">
                        <input class="form-control" type="text" placeholder="Find a menu item"></input>
                            <br/>
                        <ul class="nav nav-tabs" id="vendorTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="specials-tab" data-toggle="tab" href="#specials" role="tab" aria-controls="specials" aria-selected="true">Specials</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="appetizers-tab" data-toggle="tab" href="#appetizers" role="tab" aria-controls="appetizers" aria-selected="false">Appetizers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="dishes-tab" data-toggle="tab" href="#dishes" role="tab" aria-controls="dishes" aria-selected="false">Dishes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="desserts-tab" data-toggle="tab" href="#desserts" role="tab" aria-controls="desserts" aria-selected="false">Desserts</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="vendorTabContent">
                            <div class="tab-pane fade show active" id="specials" role="tabpanel" aria-labelledby="specials-tab">
                                <div class="row my-3">
                                    <div className="menu-image col-12" >
                                    <img className="cards-img"   src ={ require(`../images/friedrice.jpg`) } style={{"width": "618px","height": "164px"}}  class="img-fluid" alt = "Card image cap" />

                                    </div>
                                    <div className="col-9">1 Bowl 2 items fried rice included - $9.99</div>
                                    <div className="col-3"><button type="button" class="btn btn-outline-primary">Add to cart</button></div>
                                </div>
                                <div class="row my-3">
                                    <div className="menu-image col-12" >
                                    <img className="cards-img"   src ={ require(`../images/friedrice.jpg`) } style={{"width": "618px","height": "164px"}}  class="img-fluid" alt = "Card image cap" />

                                    </div>
                                    <div className="col-9">1 Plate 2 items - $9.99</div>
                                    <div className="col-3"><button type="button" class="btn btn-outline-primary">Add to cart</button></div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="appetizers" role="tabpanel" aria-labelledby="appetizers-tab"></div>
                            <div class="tab-pane fade" id="dishes" role="tabpanel" aria-labelledby="dishes-tab"></div>
                            <div class="tab-pane fade" id="desserts" role="tabpanel" aria-labelledby="desserts-tab"></div>
                        </div>

                    </div>
                   
<div className="col-12 col-md-4">             
<h4>My Cart</h4>
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
               
                     <a href="/orderSummary2"><button class="btn btn-primary btn-lg btn-block" type="submit">Order Now</button></a>

</div>
</div>
                <hr></hr>


            </div>
        </div>


        </div>
        

    )



}
export default vendorPage;