import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import BooksContainer from './containers/BooksContainer';
import UsersContainer from './containers/UsersContainer';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/footer';
import Welcome from './components/users/Welcome';

import { fetchUser } from './actions/fetchUser';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <NavBar userId={this.props.userId} />

        <Switch>
          <Route path="/books" render={routerProps => <BooksContainer {...routerProps} />} />
          <Route path="/users/:id/books" component={UsersContainer} />
          <Route exact path="/" component={Welcome} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapState = state => ({
  userId: state.user.id,
});

export default connect(mapState, { fetchUser })(App);
