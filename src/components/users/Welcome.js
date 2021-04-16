import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './user.css';

import { signinUser } from '../../actions/signinUser'

class SignIn extends React.Component {

    state = {
        username: ""
    }

    handleOnChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.signinUser(this.state.username);
        this.props.history.push('/books')
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-4 col-lg-4 col-lg-offset-4 card text-center">
                        <div className="card-header">
                            <a href="https://github.com/tGodson/online-bookstore-react">GitHub Repo</a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Enter a Username to Get Started</h5>
                            <form onSubmit={this.handleOnSubmit}>
                                <input type="text" value={this.state.username} onChange={this.handleOnChange} placeholder="Username" required />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

function mapDispatch(d) {
    return { 
      signinUser: (name) => d(signinUser(name))
    }
}
  
export default connect(null, mapDispatch)(withRouter(SignIn))