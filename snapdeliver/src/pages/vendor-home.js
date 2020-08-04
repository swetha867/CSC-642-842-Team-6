import React from "react";
import "../css/home.css"
import {Link} from 'react-router-dom';


const VendorHome = ()=>{
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <a class="nav-link homepage" href="/home">Vendor Home <span class="sr-only">(current)</span></a>
                    </li>

                </ul>
                    
            </div>

            <div>
       

                <ul>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                <i class="far fa-bell"><span class="badge badge-danger">1</span></i>
            </button>
      
                
                {/* <a href="/notifications"><button type="button" class="btn btn-primary button-space"> <i class="far fa-bell"><span class="badge badge-danger">1</span></i></button></a> */}

                    <a href="/login"><button type="button" class="btn btn-primary button-space">My Orders</button></a>

                    <button type="button" class="btn btn-primary button-space">Log out</button>
                </ul>
            </div>
           
           
            <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{"background-color":" #EDEAEA;"}}>
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New Customer</h5>


                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="container">
        
                  {/* <ul class="list-group" class="d-flex w-100 justify-content-between">
                  <li class="list-group-item"> */}
       
        
        <table class="table-borderless table-sm">
        <tbody>
        <tr>
        
        <td>Order Id</td>
        <td>1002</td>
        
        </tr>
        <tr>
        
        <td>Customer</td>
        <td>Ariana</td>
        
        </tr>
        <tr>
        
        <td>Order Time </td>
        <td>Today 5:20PM</td>
        
        </tr>
        <tr>
        
        <td>Address</td>
        <td>1600 Hollway Ave,San Francisco,Humanities Building,CA-94112</td>
        
        </tr>
        
        
        
        
        
        <tr>
        
        <td>Note</td>
        <td>Delivery ,No contact</td>
        
        </tr>
      
     
     
        
        </tbody></table>
     
       
        </div>
        
                  <div class="modal-footer">
                    <button type="button" class="btn btn-success"  data-dismiss="modal">Receive Order</button>
                  </div>
                </div>
              </div>
            </div>
          
        </nav>
        <div class="wallpapered">
       
            
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="..."/>
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
            
            <div className="container container-vendor">
            
                <div className="row">
                    <div className="col-md-8">
                        <h2><strong>HALO COFFEE</strong></h2>
                        <p class="vendor-info">
                            Vendor Info
                        </p>
                        <ul>
                            <li>1700 Haven Street, 94000</li>
                            <li>(000) 000-0000</li>
                            <li><a href="#">www.halocoffee.com</a></li>
                        </ul>
                        <h5>Covid-19 Services</h5>
                        <ul>
                            <li>Takeout</li>
                            <li>Non-contact delivery</li>
                        </ul>
                        <h6>
                         <span class="spinner-grow spinner-grow-sm"style={{"color":"Red"}}>  </span> <span style={{"color":"Red"}}> Live :</span> <span style={{"color":"green"}}>Waiting time to deliver to SFSU :10 minutes</span>
                        </h6>
                    </div>
                    <div className="col-md-4">
                        <a href="#">Change Info</a>
                    </div>
                </div>

                <hr></hr>

                    <div className="row">
                    <div className="col-md-12">
                        <h3><strong>MENU</strong></h3>
                        <a href="#" style={{"float":"right"}}>Add/Delete Menu</a>

                        <h2>Food </h2> 
                        
                        <div className="row">
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" src={require(`../images/sandwich.jpg`)} style={{height: "12vw", "object-fit": "cover"}} alt=""/>
                                <br></br>
                                Chicken Sandwich
                            </div>
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1558985250-27a406d64cb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style={{height: "12vw", "object-fit": "cover"}} alt=""/>
                                <br></br>
                               Tuna Sandwich
                            </div>
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1517254456976-ee8682099819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80"  style={{height: "12vw", "object-fit": "cover"}} alt=""/>
                                <br></br>
                                Turkey sandwich
                            </div>
                           
                        </div>
                        <h3>Drinks</h3>
                        <div className="row">
                        <div className="vendor-menu-item col-xs-6 col-md-3">
                        <img className="card-img-top" src={require(`../images/drink.jpg`)} style={{height: "12vw", "object-fit": "cover"}} alt=""/>
                                <br></br>
                                Latte
                            </div>
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" style={{height: "12vw", "object-fit": "cover"}} src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80" alt=""/>
                                <br></br>
                                Coffee
                            </div>
                            <div className="vendor-menu-item col-xs-6 col-md-3">
                            <img className="card-img-top" style={{height: "12vw", "object-fit": "cover"}} src="https://images.unsplash.com/photo-1513244608388-32427255be63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt=""/>
                                <br></br>
                               Mocha
                            </div>
                            
                            
                        </div>
                       
                    </div>
            
                </div>

            </div>
   </div>
   </div>
        

    )



}
export default VendorHome;