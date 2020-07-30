import React from "react";
import "../css/vendorsignup.css"

const Signupvendor = ()=>{

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img className="snap-logo card-img-top" src={require(`../images/snaplogo.png`)} alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    <li className="nav-item active">
                        <a className="nav-link homepage" href="/home">Home <span
                            className="sr-only">(current)</span></a>
                    </li>


                </ul>

            </div>

            <div>
                <ul>

                    <a href="/login">
                        <button type="button" className="btn btn-primary button-space">Login</button>
                    </a>

                    <button type="button" className="btn btn-primary button-space">SignUp</button>

                </ul>
            </div>
        </nav>

        <div className= "container">
            <div className="signup-form">

                    <h2 className= "bluecolor c-alignment" >Register</h2>
                    <p className="hint-text bluecolor c-alignment" >Want more Sales? Free Sign Up to special deliver to SFSU!</p>
                    <p>
                        <span className= "redcolor">*</span> field is required</p>


                    <div className="form-group">
                        <span className= "redcolor">* </span> Username
                        <input type="user" className="username form-control" name="username" placeholder="Username" required=""/>
                    </div>


                    <div className="form-group">
                        <span className= "redcolor">* </span> Business Email  <input type="email" pattern=".+sfsu.edu" title="Use your SFSU email only"
                                                                                     className="useremail form-control" name="email" placeholder="Example@sfsu.edu" required=""/>
                    </div>


                    <div className="form-group">
                        <span className= "redcolor">* </span> Password <input id="pass1" type="password" className="password form-control" name="password"
                                                                              placeholder="Password" required=""/>
                    </div>

                    <div className="form-group">
                        <span className= "redcolor">* </span> Confirm Password <input id="pass2" type="password" className="password form-control" name="password"
                                                                                      placeholder="Confirm Password" required=""/>
                    </div>

                    <div className="form-group">
                        <span className= "redcolor">* </span> Business Name
                        <input type="user" className="username form-control" name="username" placeholder="Username" required=""/>
                    </div>

                    <div className="form-group">
                        <span className= "redcolor">* </span> Address
                        <input type="address" className=" form-control" name="address" placeholder="Address" required=""/>
                    </div>

                    <div className="form-group">
                        <span className= "redcolor">* </span> City
                        <input type="address" className=" form-control" name="city" placeholder="City" required=""/>
                    </div>


                    <div className="form-group">
                        <span className= "redcolor">* </span> State
                        <input type="address" className=" form-control" name="state" placeholder="State" required=""/>
                    </div>

                    <div className="form-group">
                        <span className= "redcolor">* </span> Phone Number
                        <input type="address" className=" form-control" name="phnum" placeholder="Phone Number" required=""/>
                    </div>


                    <div className="form-group redcolor">
                        <label className="checkbox-inline bluecolor" >
                            <input type="checkbox" required=""/> By checking this, I accept the
                            <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
                        </label>
                    </div>



                    <div className="form-group">

                        <div>

                          <a href="/vendorLogin">  <button className="btn btn-warning btn-lg btn-block " type="submit" value="Register Now"
                                    id="submit">Register Now
                            </button></a>

                            <div className="text-center bluecolor" >Already have an vendor account? <a
                                href="/vendorLogin">Sign in</a></div>
                        </div>
                    </div>


            </div>
        </div>

        </div>
    )

}

export default (Signupvendor);