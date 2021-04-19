/* eslint-disable import/prefer-default-export */
export const fetchBooks = () => dispatch => {
  fetch('https://online-bookstore-rails.herokuapp.com/api/v1/books')
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: 'ADD_ALL_BOOKS', books: data });
    });
};
