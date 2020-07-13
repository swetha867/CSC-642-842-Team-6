import React from "react";
import "../css/home.css"
import 'font-awesome/css/font-awesome.min.css'


const viewaccount = () => {

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

                

                <div class="searchbar">
                    <form class="searchbar2 form-inline my-2 my-lg-0">
                        <button id="searchbar-button" class="btn btn-outline-success my-2 my-sm-0" type="submit">SNAP DELI</button>
                        <input id="searchbar2" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{"width" : "400px"}}/>
                        
                    </form>
                </div>

                <div class="button-space-row">
                    <ul>

                        <a href="#"><button type="button" class="btn btn-primary button-space"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</button></a>

                        <a href="#"><button type="button" class="btn btn-primary button-space"><i class="fa fa-bars" aria-hidden="true"></i> Orders</button></a>

                        <a href="#"><button type="button" class="btn btn-primary button-space"><i class="fa fa-user" aria-hidden="true"></i> Account</button></a>

                        <a href="#"><button type="button" class="btn btn-primary button-space"><i class="fa fa-power-off" aria-hidden="true"></i> Sign Out</button></a>

                    </ul>
                </div>
            </nav>

            <div class="container container-login">

                <div id="header-background">
                    <h1 class="login">Account</h1>

                    <a href="#" id="edit-info">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"/>Edit
                    </a>
                </div>

                { 
                /*

                <hr></hr>

                <p><strong>First Name:</strong> Kevin</p>
                <p><strong>Last Name:</strong> Smith</p>
                <p><strong>Username:</strong> HopeForTheBest</p>
                <p><strong>Password:</strong> ********</p>
                <p><strong>Email:</strong> KevinSmith@snapdeli.com</p>
                <p><strong>Phone Number:</strong> 1-800-SNAP-DELI</p>
                <p><strong>Address:</strong> 6996 SNAP DELI DRIVE</p>
                */ 
                }

                <table class="table">
                    <thead>
                        <tr>
                        
                        <th scope="col" style={{"font-size" : "x-large"}}>Information</th>
                        <th scope="col" style={{"font-size" : "x-large"}}>Data</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                        <td>First Name:</td>
                        <td>Kevin</td>

                        </tr>
                        <tr>
                        
                        <td>Last Name:</td>
                        <td>Smith</td>

                        </tr>
                        <tr>
                        
                        <td>Username:</td>
                        <td>HopeForTheBest</td>

                        </tr>





                        <tr>
                        
                        <td>Password:</td>
                        <td>********</td>

                        </tr>
                        <tr>
                        
                        <td>Email:</td>
                        <td>KevinSmith@snapdeli.com</td>

                        </tr>
                        <tr>
                        
                        <td>Phone Number:</td>
                        <td>1-800-SNAP-DELI</td>

                        </tr>
                        <tr>
                        
                        <td>Address:</td>
                        <td>6996 SNAP DELI DRIVE</td>

                        </tr>
                    </tbody>
                </table>
                
                
            </div>

            <div id="edit-border" class="container container-login" >

                <div id="header-background">
                   <h1 class="login">Payment Information</h1>

                    <a href="#" id="edit-info">
                        <i id="payment-info" class="fa fa-pencil-square-o" aria-hidden="true"/>Add/Remove
                    </a> 
                </div>
                

                
                <table class="table">
                    <thead>
                        <tr>
                        
                        <th scope="col" style={{"font-size" : "x-large"}}>Information</th>
                        <th scope="col" style={{"font-size" : "x-large"}}>Data</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                        <td>First Name:</td>
                        <td>Kevin</td>

                        </tr>
                        <tr>
                        
                        <td>Last Name:</td>
                        <td>Smith</td>

                        </tr>
                        <tr>
                        
                        <td>Card Number Ending in:</td>
                        <td>9999</td>

                        </tr>

                        <tr>

                        <td id="expiration">Expiration Month:</td>
                        <td id="expiration2">03</td>

                        </tr>

                        <tr>

                        <td id="expiration" >Expiration Year</td>
                        <td id="expiration2">2025</td>

                        </tr>

                        </tbody>
                    </table>

                    
                
            </div>

            <div class="footer">
                
                <div class="container">
                    <div class="footer-inline">
                        <ul>
                            <a href="#" class="spacing">About</a>
                            <a href="#" class="spacing">Contact</a>
                            <a href="#" class="spacing">Services</a>
                            <a href="#" class="spacing">Partner</a>
                        </ul>
                    </div>
                </div>
                

            </div>

        </div>
        

    )



}

export default viewaccount;

