import React from 'react';

import BookCard from '../books/BookCard'

const User = props => {

    return (
    <div className="container">
    
        <h4>{props.user.username}'s Books</h4>
        <div className="row row-cols-1 row-cols-md-4">
            {props.user.userBooks.map(book => <BookCard key={book.id} book={book} />)}
        </div>

    </div>
    )

}

export default User