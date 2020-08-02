import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class OrderMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // <GoogleMapReact
      //   bootstrapURLKeys={{ key: 'AIzaSyDSpfEtjSW9EHCCt_WQKSszC5eEiRxKuUw' }}
      //   defaultCenter={this.props.center}
      //   defaultZoom={this.props.zoom}
      // >
      //   {/* <AnyReactComponent
      //     lat={59.955413}
      //     lng={30.337844}
      //     text="My Marker"
      //   /> */}
      // </GoogleMapReact>

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

    );
  }
}

export default OrderMap;