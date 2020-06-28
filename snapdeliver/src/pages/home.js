import React from "react";
import "../css/home.css"


const home = ()=>{
    return(
        <div>
            <nav class="navbar-snapdeliver navbar navbar-expand-lg navbar-light bg-light">
                <img class="snap-logo card-img-top" src={require(`../images/snaplogo.png`)} alt=""/>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li class="nav-item active">
                        <a class="nav-link homepage" href="/home">Home <span class="sr-only">(current)</span></a>
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

            <div class="container">

                <h1 class="">Craving For...</h1>

                <div class="row">
                    <div class="food-card">
                        <img class="card-img-top" src={require(`../images/pizza.jpg`)} alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Pizza</h5>
                            <p class="card-text">Come get some hot spicy pizza? Might be extremely spicy!</p>
                            <a href="#" class="btn btn-primary">Visit Pizza</a>
                        </div>
                    </div>
                    <div class="food-card">
                        <img class="card-img-top" src={require(`../images/coffee.jpg`)} alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Coffee</h5>
                            <p class="card-text">Come get some morning coffee and keep yourself alert!</p>
                            <a href="#" class="btn btn-primary">Visit Coffee</a>
                        </div>
                    </div>
                    <div class="food-card">
                    <img class="card-img-top" src={require(`../images/taco.png`)} alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Taco</h5>
                            <p class="card-text">Come try some amazing and juicy tacos with avocados now!</p>
                            <a href="#" class="btn btn-primary">Visit Taco</a>
                        </div>
                    </div>
                </div>

                <h1 class="">Restaurants Near Me...</h1>

                <div class="row">
                    <div class="food-card">
                    <img class="card-img-top" src={require(`../images/pizza.jpg`)} alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Pizza Hurt</h5>
                            <p class="card-text">Come get some hot spicy pizza? Might be extremely spicy!</p>
                            <a href="#" class="btn btn-primary">Visit Pizza Hurt</a>
                        </div>
                    </div>
                    <div class="food-card">
                    <img class="card-img-top" src={require(`../images/coffee.jpg`)} alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">La Vie en Rose</h5>
                            <p class="card-text">Come get some morning coffee and keep yourself alert!</p>
                            <a href="#" class="btn btn-primary">Visit La Vie en Rose</a>
                        </div>
                    </div>
                    <div class="food-card">
                    <img class="card-img-top" src={require(`../images/taco.png`)} alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Tacoqueria</h5>
                            <p class="card-text">Come try some amazing and juicy tacos with avocados now!</p>
                            <a href="#" class="btn btn-primary">Tacoqueria</a>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
        

    )



}
export default home;