/* eslint-disable react/prop-types, react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../components/users/User';

class UsersContainer extends Component {
  render() {
    return (
      <div>
        <User user={this.props.user} />
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
});

export default connect(mapState)(UsersContainer);
