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

                <div className="container container-vendor">

                    <div className="row">
                        <div className="col-md-8">
                            <h2><strong>VENDOR NAME</strong></h2>
                            <p class="vendor-info">
                                Vendor Info
                            </p>
                            <ul>
                                <li>Address, 94000</li>
                                <li>(000) 000-0000</li>
                                <li><a href="#">www.example.com</a></li>
                            </ul>
                            <h5>Covid-19 Services</h5>
                            <ul>
                                <li>Takeout</li>
                                <li>Non-contact delivery</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <a href="#">Change Info</a>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="row">
                        <div className="col-md-8">
                            <h3><strong>MENU</strong></h3>
                            <h3>Food</h3>
                            <div className="row">
                                <div className="vendor-menu-item col-xs-6 col-md-3">
                                    <img className="vendor-menu-item-image" src={require('../images/taco.jpg')}></img>
                                    <br></br>
                                    Food #1
                                </div>
                                <div className="vendor-menu-item col-xs-6 col-md-3">
                                    <img className="vendor-menu-item-image" src={require('../images/taco.jpg')}></img>
                                    <br></br>
                                    Food #2
                                </div>
                                <div className="vendor-menu-item col-xs-6 col-md-3">
                                    <img className="vendor-menu-item-image" src={require('../images/taco.jpg')}></img>
                                    <br></br>
                                    Food #3
                                </div>
                                <div className="vendor-menu-item col-xs-6 col-md-3">
                                    <img className="vendor-menu-item-image" src={require('../images/taco.jpg')}></img>
                                    <br></br>
                                    Food #4
                                </div>
                            </div>
                            <h3>Drinks</h3>
                            <div className="row">
                                <div className="vendor-menu-item col-xs-6 col-md-3">
                                    <img className="vendor-menu-item-image" src={require('../images/coffee.jpg')}></img>
                                    <br></br>
                                    Drink #1
                                </div>
                                <div className="vendor-menu-item col-xs-6 col-md-3">
                                    <img className="vendor-menu-item-image" src={require('../images/coffee.jpg')}></img>
                                    <br></br>
                                    Drink #2
                                </div>
                                <div className="vendor-menu-item col-xs-6 col-md-3">
                                    <img className="vendor-menu-item-image" src={require('../images/coffee.jpg')}></img>
                                    <br></br>
                                    Drink #3
                                </div>
                                <div className="vendor-menu-item col-xs-6 col-md-3">
                                    <img className="vendor-menu-item-image" src={require('../images/coffee.jpg')}></img>
                                    <br></br>
                                    Drink #4
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <a href="#">Add/Delete Menu</a>
                        </div>
                    </div>

                </div>
            </div>


        </div>


    )



}
export default vendorHome;