import React from "react";
import "../css/home.css"
import {Link} from 'react-router-dom';


const home = ()=>{
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

                        <a href="/login"><button type="button" class="btn btn-primary button-space">Login</button></a>

                        <button type="button" class="btn btn-primary button-space">SignUp</button>

                    </ul>
                </div>
            </nav>
              {/*home wallpaper */}
              <div>
                  <img className="homewallpaper"  class="figure-img img-fluid rounded" src={require(`../images/homewallpaper.png`)} alt=""/>
                  {/* search bar */}

                  {/* <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </Link>

                      <form class="example" action="action_page.php">
                          <input type="text" placeholder="Search.." name="search"/>
                              <button type="submit"><i class="fa fa-search"></i></button>
                      </form> */}
                  <h1 className= "caption">SnapDeli, A new way to Eat</h1>
                  <Link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                        crossOrigin="anonymous"> </Link>
                      <div className="container">
                          <br/>
                          <div className="row justify-content-center">
                              <div className="col-12 col-md-10 col-lg-8 search-bar">
                                  <form className="card card-sm" >
                                      <div className="cardbody row no-gutters align-items-center">


                                          <div className="col">
                                              <input className="form-control form-control-lg form-control-borderless"
                                                     type="search" placeholder="What are you craving?" ></input>
                                          </div>

                                          <div className="col-auto">
                                          <a href="/search"><button className="btn btn-lg btn-success" type="button">Find</button></a>
                                          </div>

                                      </div>
                                  </form>
                              </div>

                          </div>
                      </div>
              </div>


            <div class="container">

                    <h1 className="">Time to Order! Popular Places Near SFSU</h1>

                    <div className="row">
                        <div className="food-card">
                            <img className="card-img-top" src={require(`../images/pizzahurt.jpg`)} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Pizza Hurt</h5>
                                <p className="card-text">$0 Delivery Fee. 10-15 Mins to SFSU</p>
                                <a href="#" className="btn btn-primary">Visit Pizza Hurt</a>
                            </div>
                        </div>
                        <div className="food-card">
                            <img className="card-img-top" src={require(`../images/lavieenrose.jpg`)} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">La Vie en Rose</h5>
                                <p className="card-text">$1.99 Delivery Fee. 10-20 Mins to SFSU</p>
                                <a href="#" className="btn btn-primary">Visit La Vie en Rose</a>
                            </div>
                        </div>
                        <div className="food-card">
                            <img className="card-img-top" src={require(`../images/taco.jpg`)} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Tacoqueria</h5>
                                <p className="card-text">$1.99 Delivery Fee. 10-20 Mins to SFSU</p>
                                <a href="#" className="btn btn-primary">Tacoqueria</a>
                            </div>
                        </div>
                    </div>

                <h1 class="">Craving For...</h1>

                <div class="row">
                    <div class="food-card">
                        <img class="card-img-top" src={require(`../images/pizza.jpg`)} alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Pizza</h5>
                            <p class="card-text">Come get some hot spicy pizza? Might be extremely spicy!</p>
                            <a href="#" class="btn btn-primary">Visit Nearest Pizza</a>
                        </div>
                    </div>
                    <div class="food-card">
                        <img class="card-img-top" src={require(`../images/coffee.jpg`)} alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Coffee</h5>
                            <p class="card-text">Come get some morning coffee and keep yourself alert!</p>
                            <a href="#" class="btn btn-primary">Visit Nearest Cafe</a>
                        </div>
                    </div>
                    <div class="food-card">
                    <img class="card-img-top" src={require(`../images/taco.jpg`)} alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Taco</h5>
                            <p class="card-text">Come try some amazing and juicy tacos with avocados now!</p>
                            <a href="#" class="btn btn-primary">Visit Nearest Tacoqueria</a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
        

    )



}
export default home;