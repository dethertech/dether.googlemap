import React from 'react';
import { Marker } from 'react-google-maps';
import PropTypes from 'prop-types';

const MapMarker = ({ tellers }) => (
  tellers.map(({ lat, lng, ethAddress }) => (
    <Marker
      position={{ lat, lng }}
      onClick={() => {}}
      key={ethAddress}
    />
  ))
);

MapMarker.propTypes = {
  tellers: PropTypes.array,
};

MapMarker.defaultProps = {
  tellers: [],
};

export default MapMarker;
