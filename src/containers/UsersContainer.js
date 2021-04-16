import React, { Component } from 'react';
import { connect } from 'react-redux';


import User from '../components/users/User';


class UsersContainer extends Component {


    render() {
        return (
        <div>
          <User user={this.props.user} />
        </div>
        )

    }
}

const mapState = state => {
  return {
    user: state.user
  }
}
 
export default connect(mapState)(UsersContainer);