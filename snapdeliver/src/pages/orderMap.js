import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDSpfEtjSW9EHCCt_WQKSszC5eEiRxKuUw' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    );
  }
}

export default OrderMap;