import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../actions';

/**
 * Home component
 * @extends Component
 */
class Home extends Component {
  /**
   * Load all tellers
   * @return {[type]} [description]
   */
  componentWillMount = () => {
    const { tellers } = this.props.actions;
    tellers.getTellers();
  }

  /**
   * Home component
   * @return {component} return home component
   */
  render = () => {
    console.log(this.props.tellers);
    return (
      <span>Dether google map</span>
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
