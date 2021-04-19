export const removeUserBook = (userId, bookId) => {
  const obj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ book_id: bookId }),
  };

  return dispatch => {
    fetch(`https://online-bookstore-rails.herokuapp.com/api/v1/users/${userId}`, obj)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: 'REMOVE_USER_BOOK', book: data });
      });
  };
};
