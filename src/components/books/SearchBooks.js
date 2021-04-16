import React, { Component } from 'react';
import BookCard from './BookCard';

class SearchBooks extends Component {  
    state = {
        searchBooks: []
      }
  
    handleOnChange(event) {
      if (event.target.value !== "") {
        let results = this.props.books.filter(b => b.title.toLowerCase().includes(event.target.value.toLowerCase()))
  
        this.setState({
          searchBooks: results
        })
      } else {
        this.setState({
          searchBooks: []
        })
      }
    }

    render() {
        return(
            <div className="container">

            <form>
                <div>
                <label>Search by title to bring a book to the top of the page</label><br />
                <input type="text" placeholder="Search" onChange={e => this.handleOnChange(e)} />
                </div>
            </form>
            <br />

            <div className="row row-cols-1 row-cols-md-4">
                {this.state.searchBooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>
      <br />
      </div>
        )
    }
}

export default SearchBooks;