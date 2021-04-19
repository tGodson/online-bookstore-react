/* eslint-disable react/sort-comp, react/destructuring-assignment, react/prop-types */

import React from 'react';
import './books.css';

import NotesContainer from '../../containers/NotesContainer';

class Book extends React.Component {
  findBook() {
    const id = parseInt(this.props.match.params.id, 10);

    const book = this.props.books.find(book => book.id === id);

    return book;
  }

  handleAddBook() {
    const book = this.findBook();
    const configObj = {
      user_id: this.props.user.id,
      book_id: book.id,
    };

    this.props.addUserBook(configObj);
  }

  handleRemoveBook() {
    const book = this.findBook();

    this.props.removeUserBook(this.props.user.id, book.id);
  }

  renderButton() {
    const book = this.findBook();

    const foundBook = this.props.user.userBooks.find(b => b.id === book.id);

    if (foundBook !== undefined) {
      return (
        <button type="button" className="btn btn-primary" onClick={e => this.handleRemoveBook(e)}>Remove Book</button>
      );
    }
    return (
      <button type="button" className="btn btn-primary" onClick={e => this.handleAddBook(e)}>Add Book</button>
    );
  }

  renderNotes() {
    const book = this.findBook();

    const foundBook = this.props.user.userBooks.find(b => b.id === book.id);

    if (foundBook !== undefined) {
      return (
        <NotesContainer book={book} user={this.props.user} />
      );
    }
    return null;
  }

  render() {
    const book = this.findBook();

    if (book) {
      return (
        <div className="container">

          <div className="card">
            <div className="card-header">
              Book Details
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col">
                  <img src={book.img} alt={book.title} />
                  <br />
                  <br />
                  {this.renderButton()}
                </div>
                <div className="col-8">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.authors}</p>
                  <p className="card-text">{book.description}</p>
                </div>
              </div>
            </div>
          </div>
          {this.renderNotes()}
        </div>
      );
    }
    return null;
  }
}

export default Book;
