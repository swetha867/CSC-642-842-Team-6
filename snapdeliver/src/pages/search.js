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
            <div className = "row" >
                <div className = "column"   style={{ height: '100vh', width: '50%' }}>

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

                    < div className = "container-fluid" >
                        < div className = "column" >
                            < div className = "col-12 mt-3" >
                                < div className = "card" >
                                    < div className = "card-horizontal" >
                                        < div className = "img-square-wrapper" >
                                            <img  src ={ "http://via.placeholder.com/300x180" } alt = "Card image cap" />
                                        </div>

                                        <div className="card-body">
                                            <h4 className="card-title">Card title</h4>
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


            </div>
        );
    }
}

export default SimpleMap;