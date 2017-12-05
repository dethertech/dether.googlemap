import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactLoading from 'react-loading';

import actions from '../../actions';
import Map from './Map';

/**
 * Home component
 * @extends Component
 */
class Home extends Component {
  state = {
    isMarkerShown: false,
    loading: true,
  }

  /**
   * Load all tellers
   * @return {[type]} [description]
   */
  componentWillMount = () => {
    const { tellers } = this.props.actions;
    tellers.getTellers();
  }

  /**
   * Display tellers
   * @param  {[type]} newProps New Props
   */
  componentWillReceiveProps = (newProps) => {
    if (newProps.tellers !== this.props.tellers) {
      this.setState({ isMarkerShown: true, loading: false });
    }
  }

  handleMarkerClick = () => {
    this.delayedShowMarker();
  }

  /**
   * Home component
   * @return {component} return home component
   */
  render() {
    const { isMarkerShown, loading } = this.state;
    const { tellers } = this.props;

    if (loading) return <ReactLoading type="spin" color="#d93965" height="150px" width="150px" />;

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
