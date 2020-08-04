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
  <img src={require(`../images/drink.jpg`)} style={{height: "25vw", "object-fit": "cover"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Coffee</h5>
    <p class="card-text">Total: $21.6</p>
    <p class="card-text">Ordered on:08/05/2020 5:37PM IST</p>
    <p class="card-text">Delivery: 12-15 min</p>

    <a href="#" class="btn btn-primary" style={{"float":"right"}}>View</a>
    <a href="#" class="btn btn-danger">Cancel</a>

  </div>
</div>
<br/>
<div class="card"  style={{"width":"18rem;"}}>
  <img src="https://images.unsplash.com/photo-1541833000669-8dbe1bfb574a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" style={{height: "25vw", "object-fit": "cover"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Turkey Sandwich</h5>
    <p class="card-text">Total: $21.6</p>
    <p class="card-text">Ordered on:08/05/2020 5:37PM IST</p>
    <p class="card-text">Delivery: 12-15 min</p>
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
  <img src="https://images.unsplash.com/flagged/photo-1565192835791-7b3069d9eea4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=385&q=80" style={{height: "25vw", "object-fit": "cover"}}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rasberry Smoothie</h5>
    <p class="card-text">Total: $11.6</p>
    <p class="card-text">Ordered on:08/05/2020 5:37PM IST</p>
    <p>.</p>
    <a href="#" class="btn btn-primary" style={{"float":"right"}}>View</a>


  </div>
</div>
<br/>
<div class="card"  style={{"width":"18rem;"}}>
  <img src="https://images.unsplash.com/photo-1525803377221-4f6ccdaa5133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" style={{height: "25vw", "object-fit": "cover"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Boba Tea</h5>
    <p class="card-text">Total: $12.6</p>
    <p class="card-text">Ordered on:08/05/2020 5:37PM IST</p>
    <p>.</p>
    <a href="#" class="btn btn-primary" style={{"float":"right"}}>View</a>

</div>
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