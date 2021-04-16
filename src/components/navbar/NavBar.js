import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {

    render() {
        return (
          <header>
            <div className="header">             
              <a href="https://github.com/tGodson/online-bookstore-react" >GitHub Repo</a>

              <div className="header-right">
                <NavLink to='/books' exact >All Books</NavLink>
                <NavLink to={`/users/${this.props.userId}/books`} exact >Favorite</NavLink>
              </div>
            </div>
            
            <div className="bottom-header">
              <div className="row pt-5">
                <div className="col text-center">
                  <h1>Motivational Book Store</h1>
                  <h4>Invest in yourself. Make your future.</h4>
                  <br />
                </div>
              </div>
            </div>

        </header>
        )
    }
}

export default NavBar