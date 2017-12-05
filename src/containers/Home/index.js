import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../actions';
import Map from './Map';

/**
 * Home component
 * @extends Component
 */
class Home extends Component {
  state = {
    isMarkerShown: false,
  }

  /**
   * Load all tellers
   * @return {[type]} [description]
   */
  componentWillMount = () => {
    const { tellers } = this.props.actions;
    tellers.getTellers();
  }

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }

  /**
   * Home component
   * @return {component} return home component
   */
  render() {
    const { isMarkerShown } = this.state;
    const { tellers } = this.props;

    return (
      <Map
        isMarkerShown={isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        tellers={tellers}
      />
    );
  }
}

Home.propTypes = {
  actions: PropTypes.shape({
    tellers: PropTypes.shape({}),
  }),
  tellers: PropTypes.array,
};

Home.defaultProps = {
  actions: null,
  tellers: [],
};

const mapStateToProps = ({ tellers }) => ({
  tellers,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    tellers: bindActionCreators(actions.tellers, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
