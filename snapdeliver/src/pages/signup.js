import React from "react";
import "../css/snapDeli.css"



const Signup = ()=>{
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
              <a class="nav-link homepage" href="/home">Home <span class="sr-only">(current)</span></a>
              </li>


          </ul>
          
      </div>

      <div>
          <ul>

              <a href="/login"><button type="button" class="btn btn-primary button-space">Login</button></a>

              <a href="/signup"><button type="button" class="btn btn-primary button-space" onClick="/signup">SignUp</button></a>

          </ul>
      </div>
  </nav>
<div class="form-signin">

<h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
<div class="form-group">
<label for="inputEmail" style={{"float":"left","font-weight":"bold"}}>User Name<span style={{ "color": "red" }}>*</span></label>
<input type="email" class="form-control" id="inputEmail"  placeholder="userName"></input>


</div>
<div class="form-group">
<label for="inputEmail" style={{"float":"left","font-weight":"bold"}}>Email <span style={{ "color": "red" }}>*</span></label>
<input type="email" class="form-control" id="inputEmail"  placeholder="Enter Email"></input>


</div>
<div class="form-group">
<label for="inputPassword" style={{"float":"left","font-weight":"bold"}}>Phone Number<span style={{ "color": "red" }}>*</span></label>
 <input type="password" placeholder="phoneNumber"  class="form-control" id="phoneNumber"  ></input>

</div>
<div class="form-group">
<label for="inputPassword" style={{"float":"left","font-weight":"bold"}}>Password<span style={{ "color": "red" }}>*</span></label>
 <input type="password" placeholder="password"  class="form-control" id="inputPassword"  ></input>

</div>
By Signing up you agree to our<a href="#" > Terms and Conditions</a>
<br/><br/>

<a href="/login"><button class="btn btn-lg btn-success btn-block" type="submit">Sign up</button></a>
<br/>

<div >
</div>
</div>
</div>


)



}
export default (Signup);
