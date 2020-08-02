import React from "react";

const userAccount = ()=>{
    
    
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
        
        <a href="/orderSummary2"><button type="button" class="btn btn-primary button-space">cart</button></a>
        
        <a href="/userAccount"><button type="button" class="btn btn-primary button-space" onClick="/signup">My Account</button></a>
        <a href="/orderHistory"><button type="button" class="btn btn-primary button-space" onClick="/orderHistory">My Orders</button></a>

        <button type="button" class="btn btn-primary button-space">Log out</button>

        </ul>
        </div>
        </nav>
        <div class="container">
        
        <h3 >User Account Details</h3>
        
        <div class="card">
        <h5 class="card-header">Account
        <a style={{"float":"right","color": "#0F0CC7","text-decoration-line": "underline"}}>Edit
        </a>
        </h5>
        
        <table class="table-borderless table-sm">
        <tbody>
        <tr>
        
        <td>First   Name</td>
        <td>Kevin</td>
        
        </tr>
        <tr>
        
        <td>Last     Name  </td>
        <td>Smith</td>
        
        </tr>
        <tr>
        
        <td>Username</td>
        <td>HopeForTheBest</td>
        
        </tr>
        
        
        
        
        
        <tr>
        
        <td>Password</td>
        <td>********</td>
        
        </tr>
        <tr>
        
    <td>Email</td>
        <td>KevinSmith@snapdeli.com</td>
        
        </tr>
        <tr>
        
        <td>Phone Number            </td>
        <td>1-800-SNAP-DELI</td>
        
        </tr>
        <tr>
        
        <td>Address</td>
        <td>6996 SNAP DELI DRIVE</td>
        
        </tr>
        </tbody>
        </table>
        </div>
        
        
        
        <br/>
        <div class="card">
        <h5 class="card-header">Payment Information
        <a  style={{"float":"right","color": "#0F0CC7","text-decoration-line": "underline"}}>Add/Remove Payment
        </a>
        </h5>
        
        <table class="table-borderless table-sm">
        
         <tbody>
        <tr>
        
        <td>First Name</td>
        <td>Kevin</td>
        
        </tr>
        <tr>
        
        <td>Last Name</td>
        <td>Smith</td>
        
        </tr>
        <tr>
        
        <td>Credit Card</td>
        <td>*******9999</td>
        
        </tr>
        
        
        <tr>
        <td>Expiration</td>
 
        </tr>
        
        
        <tr>
        
        <td> Month</td>
        <td>03</td>
        
        </tr>
        <tr>
        
        <td> Year</td>
        <td>2025</td>
        
        </tr>
       </tbody>
        
        </table>
        
        
        
        </div>  
        </div>
        
        </div>
        
        )
    }
    
    export default userAccount;