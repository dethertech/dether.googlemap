import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';

import MapMarker from '../MapMarker';
import './Map.css';

const googleApi = process.env.REACT_APP_GOOGLE_API;

const Map = compose(
  withProps({
    googleMapURL: googleApi,
    loadingElement: <div className="loadingElement" />,
    containerElement: <div className="containerElement" />,
    mapElement: <div className="mapElement" />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ isMarkerShown, tellers }) => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 2.602864, lng: -2.812500 }}
  >
    {isMarkerShown && <MapMarker tellers={tellers} />}
  </GoogleMap>
));

Map.propTypes = {
  isMarkerShown: PropTypes.bool,
  tellers: PropTypes.array,
};

Map.defaultProps = {
  isMarkerShown: false,
  tellers: [],
};

export default Map;
