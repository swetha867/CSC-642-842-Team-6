import React from "react";
import "../css/home.css"


const login = ()=>{
    return(
        <div class="page">
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

            <div class="container container-login">

                <h1 class="login">Login</h1>

                <form>
                    <div class="form-group input-login">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group input-login">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    
                    <div>
                        <a href="#">Forgot My Password</a>
                    </div>
                    

                    <button type="submit" class="btn btn-primary submit-button">Submit</button>

                    <div>
                        <button class="btn btn-primary cancel-button">Cancel</button>
                    </div>

                    <div class="create-account">
                        <a href="#">Not a member? Create an account</a>
                    </div>

                </form>
                
                
            </div>

            <div>
                <img class="snap-logo card-img-top login-background" src={require(`../images/login-background.png`)} alt=""/>
            </div>

        </div>
        

    )



}
export default login;

