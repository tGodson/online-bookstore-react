import React from 'react';
import BookCard from './BookCard';
import SearchBooks from './SearchBooks';
import './books.css';

const Books = props => (
  <div className="container">
    <SearchBooks books={props.books} />

    <h4>All Books</h4>
    <div className="row row-cols-1 row-cols-md-4 books">
      {props.books.map(book => <BookCard key={book.id} book={book} />)}
    </div>

  </div>
);

export default Books;
