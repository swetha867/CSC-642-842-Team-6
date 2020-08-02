import React from "react";

const OrderHistory  = ()=>{
    return(
        <div class="container">

       
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
        <a href="/orderHistory"><button type="button" class="btn btn-primary button-space" onClick="/orderHistory">My Orders</button></a>

        <button type="button" class="btn btn-primary button-space">Log out</button>

        </ul>
        </div>
        </nav>
        
        <div class="container">
  <div class="row">
    <div class="col-sm">    
    <div class="card">
  <div class="card-body">

    <h5 class="card-title">Current Orders</h5>
    <div class="card"  style={{"width":"18rem;"}}>
  <img src={require(`../images/drink.jpg`)} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Tuna Sandwich</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" style={{"float":"right"}}>View</a>
    <a href="#" class="btn btn-danger">Cancel</a>

  </div>
</div>
<br/>
<div class="card"  style={{"width":"18rem;"}}>
  <img src={require(`../images/friedrice.jpg`)} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" style={{"float":"right"}}>View</a>
    <a href="#" class="btn btn-danger">Cancel</a>  </div>
  </div>
</div>
    </div>
    </div>
    <div class="col-sm">
    <div class="card">
  <div class="card-body">

    <h5 class="card-title">Order History</h5>
    <div class="card"  style={{"width":"18rem;"}}>
  <img src={require(`../images/drink.jpg`)} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Tuna Sandwich</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" style={{"float":"right"}}>View</a>
    <a href="#" class="btn btn-danger">Cancel</a>

  </div>
</div>
<br/>
<div class="card"  style={{"width":"18rem;"}}>
  <img src={require(`../images/friedrice.jpg`)} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" style={{"float":"right"}}>View</a>
    <a href="#" class="btn btn-danger">Cancel</a>  </div>
  </div>
</div>
    </div>
    </div>
</div>
</div>
    </div>
 
    )
}
    export default OrderHistory;