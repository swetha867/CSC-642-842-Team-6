import React from "react";
import "../css/home.css"
import {Link} from 'react-router-dom';


const vendorHome = ()=>{
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
                    <a href="/login"><button type="button" class="btn btn-primary button-space">My Orders</button></a>

                    {/* <button type="button" class="btn btn-primary button-space">SignUp</button> */}
                </ul>
            </div>

        </nav>
        <div class="wallpapered">
            
            <Link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                crossOrigin="anonymous"> </Link>
            
            <div className="container container-vendor">
            
                <div className="row">
                    <div className="col-md-8">
                        <h2><strong>HALO COFFEE</strong></h2>
                        <p class="vendor-info">
                            Vendor Info
                        </p>
                        <ul>
                            <li>1700 Haven Street, 94000</li>
                            <li>(000) 000-0000</li>
                            <li><a href="#">www.halocoffee.com</a></li>
                        </ul>
                        <h5>Covid-19 Services</h5>
                        <ul>
                            <li>Takeout</li>
                            <li>Non-contact delivery</li>
                        </ul>
                        <ul>
                         <span class="spinner-grow spinner-grow-sm"style={{"color":"Red"}}>  </span> <span style={{"color":"Red"}}> Live :</span> <span style={{"color":"green"}}>Waiting time to deliver to SFSU :10 minutes</span>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <a href="#">Change Info</a>
                    </div>
                </div>

                <hr></hr>

                    <div className="row">
                    <div className="col-md-12">
                        <h3><strong>MENU</strong></h3>
                        <a href="#" style={{"float":"right"}}>Add/Delete Menu</a>

                        <h2>Food </h2> 
                        
                        <div className="row">
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" src={require(`../images/sandwich.jpg`)} alt=""/>
                                <br></br>
                                Chicken Sandwich
                            </div>
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" src={require(`../images/sandwich.jpg`)} alt=""/>
                                <br></br>
                               Tuna Sandwich
                            </div>
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" src={require(`../images/sandwich.jpg`)} alt=""/>
                                <br></br>
                                Turkey sandwich
                            </div>
                           
                        </div>
                        <h3>Drinks</h3>
                        <div className="row">
                        <div className="vendor-menu-item col-xs-6 col-md-3">
                        <img className="card-img-top" src={require(`../images/drink.jpg`)} alt=""/>
                                <br></br>
                                Latte
                            </div>
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" src={require(`../images/drink.jpg`)} alt=""/>
                                <br></br>
                                Coffee
                            </div>
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" src={require(`../images/drink.jpg`)} alt=""/>
                                <br></br>
                               Mocha
                            </div>
                            
                            
                        </div>
                       
                    </div>
                   
                </div>

            </div>
   </div>
   </div>
        

    )



}
export default vendorHome;