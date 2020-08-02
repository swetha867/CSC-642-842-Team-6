import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "../css/search.css"
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            address: '1600 Holloway Ave, San Francisco, california.',
            lat: 37.7241,
            lng: -122.4799
        },
        zoom: 17
    };
    
    render() {
        return (
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
            
            <div className = "row" >
            <div className = "column"   style={{ height: '100vh'}}>
            
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB0_jZgDE6q76UZAL90qkZgQrR8UlwW3nE'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            /* distance to mouse is to check places whenever mouse pointer moves */
            distanceToMouse={()=>{}}
            >
            <Marker
            lat={37.7241}
            lng={-122.4799}
            name="My Marker"
            color="red"
            />
            
            </GoogleMapReact>
            
            
            </div>
            {/*then, after first column, another column. PLEASE DON'T MOVE */}
            <div className = "column" >
            <div className= "container">
            
            <form className="card card-sm" >
            <div className="cardbody row no-gutters align-items-center">
            
            <div className="col">
            <input className="form-control form-control-lg form-control-borderless"
            type="search" placeholder="Search Food"/>
            </div>
            
            <div className="col-auto">

            <a href="/restaurantMenu"><button className="btn btn-lg btn-success" type="button">Go</button></a>
            </div>
            
            </div>
            </form>
            
            <br/>
            <div class="card mb-3" style={{"max-width": "540px;"}}>
            <div class="row no-gutters">

            <div class="col-md-4">
            <a href="/restaurantMenu" class="btn btn-fix text-left">


            <img  src ={ require(`../images/jangba.jpg`) } class="card-img" alt="..."/>
            </a>
            </div>
            <div class="col-md-8">

            <div class="card-body">
            <a href="/restaurantMenu" class="btn btn-fix text-left">

            <h4 className="card-title">Jangba Juice <span className="labelfloat">4.5 stars</span> </h4>
            <p className="card-text">0.5 miles from SFSU</p>
            <p className="card-text">Delivery: $2.99. 20 minutes</p>
            <p className="card-text"> Delicious fruit and vegetable juice packed with vitamins
            </p>
            </a>

            
            </div>
            </div>
            </div>
            </div>
            <div class="card mb-3" style={{"max-width": "540px;"}}>
            <div class="row no-gutters">
            <div class="col-md-4">
            <a href="/restaurantMenu" class="btn btn-fix text-left">

            <img  src ={ require(`../images/jangba1.jpg`)} class="card-img" alt="..."/>
            </a>
            </div>
            <div class="col-md-8">

            <div className="card-body">
            <a href="/restaurantMenu" class="btn btn-fix text-left">

            <h4 className="card-title">Teek's Coffee <span className="labelfloat">4.1 stars</span> </h4>
            <p className="card-text">0.5 miles from SFSU</p>
            <p className="card-text">Delivery: $0.99. 20 minutes</p>
            <p className="card-text"> Delicious fruit and vegetable juice packed with vitamins
            </p>
            </a>
            </div>
            </div>
            </div>
            </div>
            
            
            
            {/*Another Card */}
            
            
        </div>
        
        </div>
        </div>
        
        
        
        
        </div>
        
        );
    }
}

export default SimpleMap;