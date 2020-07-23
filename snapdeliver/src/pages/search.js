import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "../css/search.css"
import Marker from './Marker';

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
                                <a href="/search"><button className="btn btn-lg btn-success" type="button">Go</button></a>
                            </div>

                        </div>
                    </form>


                    < div className = "card" >
                        < div className = "card-horizontal" >
                            < div className = "img-square-wrapper" >
                                <img className="cards-img"   src ={ require(`../images/jangba.jpg`) } alt = "Card image cap" />
                            </div>

                            <div className="card-body">
                                <h4 className="card-title">Jangba Juice <span className="labelfloat">4.5 stars</span> </h4>
                                <p className="card-text">0.5 miles from SFSU</p>
                                <p className="card-text">Delivery: $1.99. 15 minutes</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                            </div>
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>

                        </div>

                    </div>


                    {/*Another Card */}

                    < div className = "card" >
                        < div className = "card-horizontal" >
                            < div className = "img-square-wrapper" >
                                <img className="cards-img"   src ={ require(`../images/jangba1.jpg`)} alt = "Card image cap" />
                            </div>

                            <div className="card-body">
                                <h4 className="card-title">Teek's Coffee <span className="labelfloat">4.1 stars</span> </h4>
                                <p className="card-text">0.5 miles from SFSU</p>
                                <p className="card-text">Delivery: $0.99. 20 minutes</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                            </div>
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>

                        </div>

                    </div>

                  </div>
                </div>




            </div>

            </div>
        );
    }
}

export default SimpleMap;